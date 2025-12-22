import { useState } from 'react';

/**
 * Hook para gerenciar destaque de linhas na tabela
 */
export const useTableHighlight = () => {
  const [highlightedRows, setHighlightedRows] = useState<string[]>([]);

  const highlightRow = (id: string, duration = 3000) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlightedRows(prev => [...prev, id]);

    element.animate([
      { backgroundColor: 'var(--primary-100)' },
      { backgroundColor: 'var(--primary-100)' },
      { backgroundColor: 'transparent' }
    ], {
      duration,
      easing: 'ease-out'
    });

    setTimeout(() => {
      setHighlightedRows(prev => prev.filter(rowId => rowId !== id));
    }, duration);
  };

  const highlightGroup = (ids: string[], duration = 3000, highlightColor = 'var(--secondary-100)') => {
    if (ids.length === 0) return;

    const firstElement = document.getElementById(ids[0]);
    if (firstElement) {
      firstElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setHighlightedRows(ids);

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.animate([
          { backgroundColor: highlightColor },
          { backgroundColor: highlightColor },
          { backgroundColor: 'transparent' }
        ], {
          duration,
          easing: 'ease-out'
        });
      }
    });

    setTimeout(() => {
      setHighlightedRows([]);
    }, duration);
  };

  const isHighlighted = (id: string) => highlightedRows.includes(id);

  return {
    highlightedRows,
    highlightRow,
    highlightGroup,
    isHighlighted
  };
};

