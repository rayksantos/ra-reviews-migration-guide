/**
 * Translations in English (United States)
 */
import { TranslationKeys } from '../types';

export const enUS: TranslationKeys = {
  app: {
    hero: {
      title: 'Your reputation cannot start from zero',
      description: 'Every review earned is a valuable asset for your business. Ensure the safe migration of your history and keep your customers\' trust intact on the new platform.',
    },
    footer: {
      copyright: '© 2025 RA Reviews. All rights reserved.',
    },
    navigation: {
      back: 'Back',
      next: 'Next',
      step: 'Step',
      of: 'of',
    },
  },
  header: {
    title: 'Migration Guide',
  },
  sidebar: {
    expandMenu: 'Expand menu',
    collapseMenu: 'Collapse menu',
    completeAllSteps: 'Complete all steps before starting the migration.',
    stepTitles: {
      step1: 'Understanding',
      step2: 'Preparation',
      step3: 'The Spreadsheet',
      step4: 'Terms & Rules',
      step5: 'Validate & Send',
    },
  },
  steps: {
    step1: {
      stepTitle: 'Complete Understanding',
      heading: 'What is Review Migration?',
      description: 'Migration is a technical process of "Identity Synchronization". For RA Reviews, a product is identified by a unique code (ID). When you switch platforms, this code usually changes, even if the product name and photo remain the same.',
      whyFill: {
        title: 'Why do I need to fill out the spreadsheet?',
        before: {
          title: 'How it was before (Manual)',
          description: 'Our team tried to validate line by line. Since we don\'t know your catalog, this generated doubts ("Is this Sneaker X the same as Sneaker Y?"), waiting queues, and the process took up to 60 days.',
        },
        now: {
          title: 'How it is now (Automatic)',
          description: 'We transferred the intelligence to those who understand the product: you. No one better than your team to point out that "Product A" became "Product B".',
          result: 'Result: No waiting queue. Migration in a few days.',
        },
      },
      whenToMigrate: {
        when: {
          title: 'When to do it?',
          items: [
            'E-commerce platform switch (e.g., Vtex to Shopify, Nuvemshop to Wake).',
            'ERP change that generates new product codes in the integration.',
            'Massive manual re-registration of products with new codes.',
          ],
        },
        whenNot: {
          title: 'When is it NOT necessary?',
          items: [
            'Layout redesign (Front-end) keeping the same platform.',
            'Platform version update (e.g., Vtex CMS to Vtex IO) if IDs are maintained.',
            'Domain (URL) change only.',
          ],
        },
      },
      idLogic: {
        title: 'The Logic of IDs',
        description: 'RA Reviews does not use "Name" or "Commercial SKU" to link reviews, we use the Product ID sent in the integration.',
        oldPlatform: 'Old Platform',
        newPlatform: 'New Platform',
        systemDoesNotRecognize: 'The system does not recognize',
        systemExplanation: 'For the system, 675 is different from 998811',
        exampleProduct: 'Running Shoes',
        exampleOldId: '675',
        exampleNewId: '998811',
      },
    },
    step2: {
      stepTitle: 'Data Extraction',
      heading: 'Generating the Migration Base',
      description: 'The file you will export now contains all your products and will be the base you will edit. Without this file, it is not possible to proceed.',
      criticalRule: {
        title: 'Critical Rule: Never Add Rows',
        description: 'This spreadsheet represents the RA Reviews database. Do not manually add new products to this spreadsheet. If a product was not in the exported base, it has no review history to migrate. Inserting new rows will cause processing errors.',
      },
      removeNewProducts: {
        title: 'New Products Cleanup',
        description: 'Since you have already integrated the new platform, the exported file will also contain new products (with new IDs) that have already entered our system.',
        action: 'You must remove (delete) these rows from the spreadsheet. We do not migrate products that were already born on the new platform.',
      },
      instructions: {
        title: 'How to generate your base file in the RA Reviews Panel:',
        step1: {
          title: 'Access the "Export Data" Menu',
          description: 'In the left sidebar menu of your current administrative panel.',
        },
        step2: {
          title: 'Configure the Filter',
          tipo: 'All company products',
          periodo: 'All periods',
        },
        step3: {
          title: 'Save the File',
          description: 'You will receive a link by email. Download and save as migracao_base.csv.',
        },
      },
      policy: {
        title: 'Usage Policy',
        description: 'Remember: Each client has the right to perform this assisted migration process only ONCE during the entire contract period. Ensure the data is correct.',
      },
    },
    step3: {
      stepTitle: 'Hands-on',
      heading: 'Golden Rules and Filling',
      description: 'Open the file you downloaded. You will see columns with old data. Your only task is to fill in the destination columns with attention to details.',
      integrationChecklist: {
        title: 'Before filling: Do the new IDs already exist?',
        description: 'For the migration to work, RA Reviews already needs to be receiving data from your new platform. Check:',
        newOrders: {
          title: 'New Orders in Panel',
          description: 'Go to the RA Reviews panel. Are there already orders from the new store coming in?',
        },
        widgets: {
          title: 'Widgets on Site',
          description: 'Do stars and reviews already appear visually on the new store (even if empty)?',
        },
      },
      criticalRules: {
        forbidden: {
          title: 'Forbidden (1 to N)',
          description: 'An old product CANNOT become several new ones.',
          example: 'Wrong Example:',
          note: 'The system needs a unique destination for old reviews.',
        },
        allowed: {
          title: 'Allowed (N to 1)',
          description: 'Several old products CAN be migrated to a single new one.',
          example: 'Correct Example (Grouping):',
        },
      },
      excelAlert: {
        title: 'Beware of Excel!',
        description: 'Excel often "breaks" large numeric IDs or those starting with zero. Ex: ID 00123 becomes 123 and ID 99999999999 becomes 9.99E+10.',
        tip: 'Golden Tip: If your new IDs have letters or start with zero, format column C as "Text" before typing or use Google Sheets to edit.',
      },
      detailedRules: {
        title: 'Important Rules and Observations',
        rules: [
          {
            title: 'DO NOT Create New Rows',
            description: 'The exported spreadsheet is a mirror of our database. If you manually add a product, the internal RA ID will not exist and the migration will fail.',
            solution: 'If a product is not in the spreadsheet, it will not be migrated.',
          },
          {
            title: 'Remove New Products',
            description: 'Since the integration is already active, your spreadsheet may contain new products (from the new store). You must remove (delete) these rows. We don\'t need to migrate a new product to itself.',
          },
          {
            title: 'Product Archiving',
            description: 'If a product will not be migrated, it must be archived. Fill the New code column with null and the Action column with archive.',
          },
          {
            title: 'Merging (Unification)',
            description: 'To join several old products into a single new one, repeat the same New ID for all of them.',
            note: 'The final product will inherit the name of the LAST product listed in the group to be merged.',
          },
          {
            title: 'Mandatory Filling',
            description: 'The Old code and New code columns are mandatory (except in archiving, where the new one is \'null\'). The Action column is only mandatory if archiving.',
          },
          {
            title: 'Partial Migrations',
            description: 'It is allowed to remove rows of products you do not want to migrate or archive. The system will ignore what is not in the spreadsheet.',
          },
          {
            title: 'File Cleanup',
            items: [
              'Do not leave blank rows in the middle or at the end of the file.',
              'IMPORTANT: Delete rows referring to new products (that already exist on the new platform) to avoid duplication and errors.',
            ],
          },
        ],
      },
      scenarios: {
        title: 'Day-to-Day Scenarios',
        simple: {
          title: 'Simple Swap',
          description: 'The product exists in both stores, but the code changed.',
          old: 'Old',
          new: 'New',
          seeInTable: 'See in table',
        },
        grouping: {
          title: 'Grouping',
          description: 'Several old products became variations of a single parent.',
          old37: 'Old 37',
          old38: 'Old 38',
          seeInTable: 'See in table',
        },
        cleanup: {
          title: 'Cleanup',
          description: 'The product was discontinued and will not exist in the new store.',
          newId: 'New ID',
          action: 'Action',
          seeInTable: 'See in table',
        },
      },
      exampleTable: {
        title: 'Complete Spreadsheet Example',
        subtitle: 'Observe the different types of filling',
        columns: {
          name: 'A: Name (Ref)',
          oldId: {
            label: 'B: Old ID',
            tooltip: 'The original product code on the previous platform. Already filled in and should not be changed.',
          },
          newId: {
            label: 'C: New ID',
            tooltip: 'The corresponding code in the new store. Accepts numbers and letters. Fill exactly as it appears in the new ERP.',
          },
          action: {
            label: 'D: Action',
            tooltip: 'Optional. Leave blank to migrate or write \'archive\' to not display reviews for this product.',
          },
          explanation: 'Explanation (Visual)',
        },
        rows: {
          simple: {
            name: 'Office Chair',
            oldId: '100',
            newId: '55402',
            action: '-',
            explanation: 'Normal numeric ID migration.',
          },
          alphanumeric: {
            name: 'Glass Table',
            oldId: '200',
            newId: 'MESA-V-120',
            action: '-',
            explanation: 'New store ID contains letters/hyphens.',
          },
          leadingZero: {
            name: 'Luminaire',
            oldId: '300',
            newId: '00551',
            action: '-',
            explanation: 'ID starts with zero (be careful with Excel).',
          },
          group1: {
            name: 'Red Sneaker 37',
            oldId: 'T-37',
            newId: 'TENIS-RED',
            action: '-',
            explanation: 'Variation pointing to Parent.',
          },
          group2: {
            name: 'Red Sneaker 38',
            oldId: 'T-38',
            newId: 'TENIS-RED',
            action: '-',
            explanation: 'Variation pointing to Parent.',
          },
          archive: {
            name: 'Old Winter 2018',
            oldId: '999',
            newId: 'null',
            action: 'archive',
            explanation: 'Product excluded. Reviews will be archived.',
          },
        },
        badges: {
          csv: 'CSV UTF-8',
          required: 'Mandatory Columns',
        },
      },
    },
    step4: {
      stepTitle: 'Signature Flow',
      heading: 'How does officialization work?',
      description: 'To ensure the integrity of your data and the legal security of both parties, the migration follows an automated validation and signature flow.',
      automation: {
        title: '1. Post-Submission Automation',
        description: 'When you submit the form in the next step, your spreadsheet will go through a second internal automatic validation. Our system checks the final technical consistency of the file.',
      },
      term: {
        title: '2. Acceptance Term',
        description: 'If everything is correct in the validation, the system generates the Acceptance Term and automatically sends it to the email registered in the form for digital signature.',
      },
      signature: {
        title: 'Migration only occurs after signature',
        description: 'The technical execution of the migration in the database will only actually start after the Term is signed by the responsible party. Without the signature, the data remains unchanged.',
      },
      timeEstimate: {
        title: 'Estimated time:',
        description: 'Check your inbox and spam after submission. The email with the term is usually sent a few minutes after the internal automation validation.',
      },
    },
    step5: {
      stepTitle: 'Official Request',
      checklist: {
        title: 'Final Security Checklist',
        description: 'Make sure all requirements have been met to avoid delays.',
        header: 'Readiness Checklist',
        intro: 'Before we send you to the request form, confirm that you have followed all technical guidelines:',
        items: [
          'I filled out the "de-para" spreadsheet correctly following the model.',
          'I validated that the new product IDs are correct and without formatting errors.',
          'The new platform is already integrated and sending orders to RA Reviews.',
          'I removed from the spreadsheet the rows of new products that were already born on the new platform.',
          'I am aware that the migration only actually starts after I sign the Term I will receive by email.',
        ],
        next: 'Proceed to Request',
      },
      confirmation: {
        title: 'Final Confirmation',
        header: 'Responsibility Statement',
        description: 'By proceeding, you confirm that you have reviewed the data. Errors in the spreadsheet can cause incorrect review linking.',
        automation: 'After submission, our automation will validate your file and send the acceptance term to your email.',
        review: 'Review Checklist',
        confirm: 'Yes, I am sure',
      },
      final: {
        title: 'Request Migration',
        description: 'Click the button below to fill out the official form.',
        almostThere: 'Almost there!',
        intro: 'The last step is to fill out the form and attach your spreadsheet. See what happens next:',
        timeline: {
          validation: {
            title: 'Internal Validation',
            description: 'Our automation performs a second technical check on your spreadsheet.',
          },
          email: {
            title: 'Term by Email',
            description: 'If everything is correct, the acceptance term is sent to your email.',
          },
          execution: {
            title: 'Real Execution',
            description: 'Only after your signature do we actually execute the migration in the database.',
          },
        },
        openForm: 'Open Official Form',
        deadline: 'Deadline: 48 to 72 business hours after the term is properly signed.',
        backToChecklist: 'Back to Checklist',
      },
    },
  },
};

