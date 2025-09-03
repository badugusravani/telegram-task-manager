export interface KeywordData {
  keyword: string;
  intent: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  serp: string;
  lastUpdate: string;
  category: string;
  variations?: string[];
}

export interface PageTemplate {
  category: string;
  titleTemplate: string;
  descriptionTemplate: string;
  contentGenerator: (keyword: string, data: KeywordData) => string;
}

export const keywordCategories = {
  LOVE_MESSAGES: 'love-messages',
  APOLOGY_MESSAGES: 'apology-messages',
  EMOJI_COLLECTIONS: 'emoji-collections',
  AESTHETIC_SYMBOLS: 'aesthetic-symbols',
  SALARY_CALCULATORS: 'salary-calculators',
  TEXT_DECORATIONS: 'text-decorations'
};

export const keywordsData: KeywordData[] = [
  // Love Messages
  {
    keyword: "i love you 1000 times copy and paste",
    intent: "Informational",
    searchVolume: 4400,
    difficulty: 3,
    cpc: 0.00,
    serp: "Sitelinks, Image pack, Related searches",
    lastUpdate: "2 weeks",
    category: keywordCategories.LOVE_MESSAGES,
    variations: ["love you 1000 times", "i love u 1000 times", "te amo 1000 veces"]
  },
  {
    keyword: "i love you 10000 times copy and paste",
    intent: "Informational",
    searchVolume: 3600,
    difficulty: 8,
    cpc: 0.00,
    serp: "Sitelinks, Image pack, Video, Related searches",
    lastUpdate: "5 hours",
    category: keywordCategories.LOVE_MESSAGES,
    variations: ["love you 10000 times", "i love u 10000 times", "te amo 10000 veces"]
  },
  {
    keyword: "i love you 100 times copy and paste",
    intent: "Informational",
    searchVolume: 2400,
    difficulty: 13,
    cpc: 0.00,
    serp: "Sitelinks, Image, Image pack, Video, Related searches",
    lastUpdate: "Last week",
    category: keywordCategories.LOVE_MESSAGES,
    variations: ["love you 100 times", "i love u 100 times", "100 te amo"]
  },
  {
    keyword: "i love you 3000 copy and paste",
    intent: "Informational, Commercial",
    searchVolume: 260,
    difficulty: 1,
    cpc: 0.00,
    serp: "Sitelinks, Image pack, Video, Related searches",
    lastUpdate: "3 weeks",
    category: keywordCategories.LOVE_MESSAGES,
    variations: ["love you 3000", "i love u 3000", "te amo 3000"]
  },
  // Apology Messages
  {
    keyword: "sorry 100 times copy and paste",
    intent: "Informational, Commercial",
    searchVolume: 2900,
    difficulty: 3,
    cpc: 0.00,
    serp: "Image pack, Video, Related searches",
    lastUpdate: "Last week",
    category: keywordCategories.APOLOGY_MESSAGES,
    variations: ["100 sorry", "sorry 100 times", "100 times sorry"]
  },
  {
    keyword: "sorry 1000 times copy and paste",
    intent: "Informational, Commercial",
    searchVolume: 1900,
    difficulty: 3,
    cpc: 0.00,
    serp: "Image, Image pack, Video, Related searches",
    lastUpdate: "2 weeks",
    category: keywordCategories.APOLOGY_MESSAGES,
    variations: ["1000 sorry", "sorry 1000 times", "1000 times sorry"]
  },
  {
    keyword: "sorry written 10000 times copy and paste",
    intent: "Informational, Commercial",
    searchVolume: 2900,
    difficulty: 3,
    cpc: 0.00,
    serp: "Image pack, Video, Related searches",
    lastUpdate: "Last week",
    category: keywordCategories.APOLOGY_MESSAGES,
    variations: ["sorry 10000 times", "10000 sorry", "sorry written 10000"]
  },
  // Emoji Collections
  {
    keyword: "1000 heart emojis copy and paste",
    intent: "Informational, Commercial",
    searchVolume: 3600,
    difficulty: 13,
    cpc: 0.00,
    serp: "Sitelinks, Image, Image pack, Video, Related searches",
    lastUpdate: "2 weeks",
    category: keywordCategories.EMOJI_COLLECTIONS,
    variations: ["heart emoji 1000 times", "1000 hearts", "heart emojis copy paste"]
  },
  {
    keyword: "1000 kiss emoji copy and paste",
    intent: "Informational, Commercial",
    searchVolume: 480,
    difficulty: 11,
    cpc: 0.00,
    serp: "Image, Image pack, Video, Related searches",
    lastUpdate: "3 weeks",
    category: keywordCategories.EMOJI_COLLECTIONS,
    variations: ["kiss emoji 1000 times", "1000 kiss emojis", "kiss emojis copy paste"]
  },
  // Aesthetic Symbols
  {
    keyword: "aesthetic symbols copy paste",
    intent: "Informational",
    searchVolume: 1000,
    difficulty: 10,
    cpc: 0.00,
    serp: "Sitelinks, Image pack, Video, Related searches",
    lastUpdate: "3 weeks",
    category: keywordCategories.AESTHETIC_SYMBOLS,
    variations: ["simbolos aesthetic", "aesthetic symbols", "simbolo estetico"]
  },
  // Salary Calculators
  {
    keyword: "23 an hour is how much a year",
    intent: "Informational",
    searchVolume: 14800,
    difficulty: 14,
    cpc: 0.00,
    serp: "Sitelinks, AI Overview, FAQ, Video, Related searches",
    lastUpdate: "Last week",
    category: keywordCategories.SALARY_CALCULATORS,
    variations: ["$23 per hour yearly", "23 dollars an hour annually", "23/hour to year"]
  },
  {
    keyword: "24 an hour is how much a year",
    intent: "Informational",
    searchVolume: 12100,
    difficulty: 13,
    cpc: 0.00,
    serp: "AI Overview, FAQ, Video, Related searches",
    lastUpdate: "Last week",
    category: keywordCategories.SALARY_CALCULATORS,
    variations: ["$24 per hour yearly", "24 dollars an hour annually", "24/hour to year"]
  }
];

// Generate variations for common patterns
export const generateKeywordVariations = (baseKeyword: string, category: string): string[] => {
  const variations: string[] = [];
  
  switch (category) {
    case keywordCategories.LOVE_MESSAGES:
      const loveNumbers = [10, 50, 100, 500, 1000, 2000, 3000, 5000, 10000];
      const loveVariations = [
        "i love you {n} times copy and paste",
        "i love u {n} times copy and paste", 
        "love you {n} times copy and paste",
        "i love you {n} times",
        "te amo {n} veces",
        "te amo del 1 al {n}"
      ];
      
      loveNumbers.forEach(num => {
        loveVariations.forEach(variation => {
          variations.push(variation.replace('{n}', num.toString()));
        });
      });
      break;
      
    case keywordCategories.APOLOGY_MESSAGES:
      const sorryNumbers = [10, 50, 100, 500, 1000, 5000, 10000];
      const sorryVariations = [
        "sorry {n} times copy and paste",
        "sorry {n} times",
        "{n} sorry copy paste",
        "{n} times sorry copy paste",
        "sorry written {n} times copy and paste"
      ];
      
      sorryNumbers.forEach(num => {
        sorryVariations.forEach(variation => {
          variations.push(variation.replace('{n}', num.toString()));
        });
      });
      break;
      
    case keywordCategories.EMOJI_COLLECTIONS:
      const emojiNumbers = [10, 50, 100, 500, 1000, 5000];
      const emojiTypes = ['heart', 'kiss', 'love', 'sad', 'happy', 'crown', 'diamond'];
      const emojiVariations = [
        "{n} {type} emojis copy and paste",
        "{n} {type} emoji copy and paste",
        "{type} emoji {n} times copy and paste"
      ];
      
      emojiNumbers.forEach(num => {
        emojiTypes.forEach(type => {
          emojiVariations.forEach(variation => {
            variations.push(variation.replace('{n}', num.toString()).replace('{type}', type));
          });
        });
      });
      break;
      
    case keywordCategories.SALARY_CALCULATORS:
      const hourlyRates = Array.from({length: 50}, (_, i) => i + 15); // $15-$65/hour
      const salaryVariations = [
        "{rate} an hour is how much a year",
        "${rate} an hour is how much a year",
        "{rate} per hour yearly salary",
        "{rate} dollars an hour annually"
      ];
      
      hourlyRates.forEach(rate => {
        salaryVariations.forEach(variation => {
          variations.push(variation.replace('{rate}', rate.toString()));
        });
      });
      break;
  }
  
  return variations;
};

export const getAllKeywords = (): string[] => {
  const allKeywords = [...keywordsData.map(k => k.keyword)];
  
  // Generate variations for each category
  Object.values(keywordCategories).forEach(category => {
    const variations = generateKeywordVariations('', category);
    allKeywords.push(...variations);
  });
  
  return [...new Set(allKeywords)]; // Remove duplicates
};