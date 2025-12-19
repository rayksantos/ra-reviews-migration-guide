import { ValidationError } from '../types/migration';

// Helper to detect delimiter (comma or semicolon)
const detectDelimiter = (line: string): string => {
  const commas = (line.match(/,/g) || []).length;
  const semicolons = (line.match(/;/g) || []).length;
  return semicolons > commas ? ';' : ',';
};

// Helper to normalize headers (Remove accents, special chars, lowercase)
const normalizeHeader = (header: string) => {
  return header
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^a-z0-9]/g, "");
};

// Robust CSV Line Parser
const parseCSVLine = (text: string, delimiter: string) => {
  const result = [];
  let cell = '';
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      result.push(cell.trim());
      cell = '';
    } else {
      cell += char;
    }
  }
  result.push(cell.trim());
  return result;
};

export const validateCSV = (content: string): ValidationError[] => {
  const cleanContent = content.replace(/^\uFEFF/, '').trim();
  const lines = cleanContent.split(/\r?\n/).filter(line => line.trim() !== '');
  const errors: ValidationError[] = [];
  
  if (lines.length < 2) {
    return [{ row: 0, message: "Arquivo vazio ou contendo apenas o cabeçalho." }];
  }

  const delimiter = detectDelimiter(lines[0]);
  const rawHeaders = parseCSVLine(lines[0], delimiter);
  const headers = rawHeaders.map(normalizeHeader);
  
  const idxOldCode = headers.findIndex(h => h.includes('codigoantigo'));
  const idxNewCode = headers.findIndex(h => h.includes('novocodigo'));
  const idxAction = headers.findIndex(h => h.includes('acao'));

  if (idxOldCode === -1 || idxNewCode === -1) {
    return [{ 
        row: 1, 
        message: `Cabeçalho inválido. Colunas encontradas: [${rawHeaders.join(', ')}]. Esperado: "Código antigo do produto", "Novo código do produto", "Ação".` 
    }];
  }

  const oldCodesSeen = new Set<string>();

  for (let i = 1; i < lines.length; i++) {
    const columns = parseCSVLine(lines[i], delimiter);
    if (columns.length === 0 || (columns.length === 1 && columns[0] === '')) continue;

    const oldCode = columns[idxOldCode];
    const newCode = columns[idxNewCode];
    const action = idxAction !== -1 ? (columns[idxAction]?.toLowerCase() || '') : '';

    if (!oldCode) {
      errors.push({ row: i + 1, message: "Coluna 'Código antigo' está em branco." });
    } else {
        if (oldCodesSeen.has(oldCode)) {
            errors.push({ row: i + 1, message: `Código antigo duplicado: "${oldCode}".` });
        } else {
            oldCodesSeen.add(oldCode);
        }
    }

    if (newCode === 'null' || newCode === 'NULL' || !newCode) {
      if (action !== 'archive') {
        errors.push({ row: i + 1, message: `Novo código vazio. Se o produto não existe mais, preencha "null" no código e "archive" na coluna Ação.` });
      }
    }
  }

  return errors;
};

// NEW: Helper to extract unique New IDs for API validation
export const extractNewCodes = (content: string): string[] => {
    const cleanContent = content.replace(/^\uFEFF/, '').trim();
    const lines = cleanContent.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length < 2) return [];

    const delimiter = detectDelimiter(lines[0]);
    const headers = parseCSVLine(lines[0], delimiter).map(normalizeHeader);
    const idxNewCode = headers.findIndex(h => h.includes('novocodigo'));

    if (idxNewCode === -1) return [];

    const newCodes = new Set<string>();

    for (let i = 1; i < lines.length; i++) {
        const columns = parseCSVLine(lines[i], delimiter);
        if (columns.length === 0) continue;
        
        const code = columns[idxNewCode];
        // Only extract valid IDs (ignore 'null', empty, or placeholders)
        if (code && code.toLowerCase() !== 'null' && code.trim() !== '') {
            newCodes.add(code.trim());
        }
    }

    return Array.from(newCodes);
};