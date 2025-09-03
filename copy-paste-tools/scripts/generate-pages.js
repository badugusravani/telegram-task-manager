const fs = require('fs');
const path = require('path');

// Import keyword data
const { keywordsData, generateKeywordVariations, keywordCategories } = require('../src/data/keywords.ts');

// Generate all possible keyword variations
function getAllKeywordVariations() {
  const allKeywords = new Set();
  
  // Add existing keywords
  keywordsData.forEach(k => allKeywords.add(k.keyword));
  
  // Generate variations for each category
  Object.values(keywordCategories).forEach(category => {
    const variations = generateKeywordVariations('', category);
    variations.forEach(v => allKeywords.add(v));
  });
  
  return Array.from(allKeywords);
}

// Create page file for a keyword
function createPageFile(keyword) {
  const slug = keyword.toLowerCase().replace(/\s+/g, '-');
  const dirPath = path.join(__dirname, '../src/app', slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    return;
  }
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Determine category
  let category = keywordCategories.TEXT_DECORATIONS;
  if (keyword.includes('love') || keyword.includes('te amo')) {
    category = keywordCategories.LOVE_MESSAGES;
  } else if (keyword.includes('sorry')) {
    category = keywordCategories.APOLOGY_MESSAGES;
  } else if (keyword.includes('emoji')) {
    category = keywordCategories.EMOJI_COLLECTIONS;
  } else if (keyword.includes('aesthetic') || keyword.includes('symbol')) {
    category = keywordCategories.AESTHETIC_SYMBOLS;
  } else if (keyword.includes('hour') && keyword.includes('year')) {
    category = keywordCategories.SALARY_CALCULATORS;
  }
  
  const pageContent = `import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '${keyword} - CopyPaste Tools',
  description: 'Generate and copy ${keyword} instantly. Free tools for text generation and copy-paste functionality.',
};

export default function ${slug.replace(/-/g, '')}Page() {
  // Redirect to dynamic page handler
  redirect(\`/\${encodeURIComponent('${keyword}').replace(/%20/g, '-')}\`);
}`;

  fs.writeFileSync(filePath, pageContent);
  console.log(`Created page for: ${keyword}`);
}

// Main execution
function main() {
  console.log('Generating pages for all keyword variations...');
  
  const allKeywords = getAllKeywordVariations();
  console.log(`Total keywords to process: ${allKeywords.length}`);
  
  // Limit to top 1000 keywords to avoid too many files
  const topKeywords = allKeywords.slice(0, 1000);
  
  topKeywords.forEach(keyword => {
    try {
      createPageFile(keyword);
    } catch (error) {
      console.error(`Error creating page for "${keyword}":`, error.message);
    }
  });
  
  console.log('Page generation complete!');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { getAllKeywordVariations, createPageFile };