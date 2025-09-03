import { Metadata } from 'next';
import { keywordsData, keywordCategories, KeywordData } from '@/data/keywords';
import LoveMessagePage from '@/components/LoveMessagePage';
import ApologyMessagePage from '@/components/ApologyMessagePage';
import EmojiCollectionPage from '@/components/EmojiCollectionPage';
import AestheticSymbolsPage from '@/components/AestheticSymbolsPage';
import SalaryCalculatorPage from '@/components/SalaryCalculatorPage';
import TextDecorationsPage from '@/components/TextDecorationsPage';

interface PageProps {
  params: {
    slug: string[];
  };
}

// Function to determine category from keyword
function getCategoryFromKeyword(keyword: string): string {
  const lowerKeyword = keyword.toLowerCase();
  
  if (lowerKeyword.includes('love') || lowerKeyword.includes('te amo')) {
    return keywordCategories.LOVE_MESSAGES;
  }
  if (lowerKeyword.includes('sorry') || lowerKeyword.includes('apologize')) {
    return keywordCategories.APOLOGY_MESSAGES;
  }
  if (lowerKeyword.includes('emoji') && (lowerKeyword.includes('heart') || lowerKeyword.includes('kiss') || lowerKeyword.includes('crown'))) {
    return keywordCategories.EMOJI_COLLECTIONS;
  }
  if (lowerKeyword.includes('aesthetic') || lowerKeyword.includes('symbol') || lowerKeyword.includes('decoration')) {
    return keywordCategories.AESTHETIC_SYMBOLS;
  }
  if (lowerKeyword.includes('hour') && lowerKeyword.includes('year')) {
    return keywordCategories.SALARY_CALCULATORS;
  }
  
  return keywordCategories.TEXT_DECORATIONS;
}

// Function to extract numbers from keyword
function extractNumbers(keyword: string): number[] {
  const matches = keyword.match(/\d+/g);
  return matches ? matches.map(Number) : [100];
}

// Function to generate page data from slug
function generatePageData(slug: string[]) {
  const keyword = slug.join(' ').replace(/-/g, ' ');
  const category = getCategoryFromKeyword(keyword);
  const numbers = extractNumbers(keyword);
  
  // Check if this is an exact match from our data
  const exactMatch = keywordsData.find(k => 
    k.keyword.toLowerCase() === keyword.toLowerCase()
  );
  
  if (exactMatch) {
    return {
      keyword: exactMatch.keyword,
      category: exactMatch.category,
      data: exactMatch,
      numbers
    };
  }
  
  // Generate data for dynamic keywords
  return {
    keyword,
    category,
    data: {
      keyword,
      intent: "Informational",
      searchVolume: 1000,
      difficulty: 5,
      cpc: 0.00,
      serp: "Related searches",
      lastUpdate: "Recent",
      category,
      variations: []
    } as KeywordData,
    numbers
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { keyword, category } = generatePageData(params.slug);
  
  const titles = {
    [keywordCategories.LOVE_MESSAGES]: `${keyword} - Free Love Messages Copy and Paste`,
    [keywordCategories.APOLOGY_MESSAGES]: `${keyword} - Free Apology Messages Copy and Paste`,
    [keywordCategories.EMOJI_COLLECTIONS]: `${keyword} - Free Emoji Collection Copy and Paste`,
    [keywordCategories.AESTHETIC_SYMBOLS]: `${keyword} - Free Aesthetic Symbols Copy and Paste`,
    [keywordCategories.SALARY_CALCULATORS]: `${keyword} - Salary Calculator Tool`,
    [keywordCategories.TEXT_DECORATIONS]: `${keyword} - Free Text Decorations Copy and Paste`
  };
  
  const descriptions = {
    [keywordCategories.LOVE_MESSAGES]: `Get ${keyword} ready to copy and paste. Express your love with beautiful formatted messages. Free and easy to use.`,
    [keywordCategories.APOLOGY_MESSAGES]: `Get ${keyword} ready to copy and paste. Perfect apology messages for any situation. Free and instant.`,
    [keywordCategories.EMOJI_COLLECTIONS]: `Get ${keyword} ready to copy and paste. Beautiful emoji collections for social media and messaging.`,
    [keywordCategories.AESTHETIC_SYMBOLS]: `Get ${keyword} ready to copy and paste. Beautiful aesthetic symbols and decorations for your text.`,
    [keywordCategories.SALARY_CALCULATORS]: `Calculate ${keyword} with our free salary calculator. Convert hourly wages to annual salary instantly.`,
    [keywordCategories.TEXT_DECORATIONS]: `Get ${keyword} ready to copy and paste. Beautiful text decorations and formatting tools.`
  };
  
  return {
    title: titles[category] || `${keyword} - Copy and Paste Tools`,
    description: descriptions[category] || `Get ${keyword} ready to copy and paste. Free tools for text generation.`,
    keywords: [keyword, 'copy and paste', 'text generator', 'free tools'],
    openGraph: {
      title: titles[category] || `${keyword} - Copy and Paste Tools`,
      description: descriptions[category] || `Get ${keyword} ready to copy and paste.`,
      type: 'website',
    }
  };
}

export default function DynamicPage({ params }: PageProps) {
  const { keyword, category, data, numbers } = generatePageData(params.slug);
  
  // Render appropriate component based on category
  switch (category) {
    case keywordCategories.LOVE_MESSAGES:
      return <LoveMessagePage keyword={keyword} data={data} numbers={numbers} />;
    case keywordCategories.APOLOGY_MESSAGES:
      return <ApologyMessagePage keyword={keyword} data={data} numbers={numbers} />;
    case keywordCategories.EMOJI_COLLECTIONS:
      return <EmojiCollectionPage keyword={keyword} data={data} numbers={numbers} />;
    case keywordCategories.AESTHETIC_SYMBOLS:
      return <AestheticSymbolsPage keyword={keyword} data={data} numbers={numbers} />;
    case keywordCategories.SALARY_CALCULATORS:
      return <SalaryCalculatorPage keyword={keyword} data={data} numbers={numbers} />;
    case keywordCategories.TEXT_DECORATIONS:
      return <TextDecorationsPage keyword={keyword} data={data} numbers={numbers} />;
    default:
      return <LoveMessagePage keyword={keyword} data={data} numbers={numbers} />;
  }
}

// Generate static paths for known keywords (for better SEO)
export async function generateStaticParams() {
  const paths = keywordsData.map(keyword => ({
    slug: keyword.keyword.toLowerCase().split(' ')
  }));
  
  // Add some common variations
  const commonVariations = [
    'sorry-100-times-copy-and-paste',
    'i-love-you-1000-times-copy-and-paste',
    'heart-emojis-copy-paste',
    'aesthetic-symbols-copy-paste'
  ].map(slug => ({ slug: slug.split('-') }));
  
  return [...paths, ...commonVariations];
}