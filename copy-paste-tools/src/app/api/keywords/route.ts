import { NextRequest, NextResponse } from 'next/server';
import { keywordsData, generateKeywordVariations, keywordCategories } from '@/data/keywords';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '100');
  
  if (category && Object.values(keywordCategories).includes(category)) {
    // Generate variations for specific category
    const variations = generateKeywordVariations('', category);
    return NextResponse.json({
      category,
      keywords: variations.slice(0, limit),
      total: variations.length
    });
  }
  
  // Return all keywords
  const allKeywords = keywordsData.map(k => ({
    keyword: k.keyword,
    category: k.category,
    searchVolume: k.searchVolume,
    difficulty: k.difficulty
  }));
  
  return NextResponse.json({
    keywords: allKeywords.slice(0, limit),
    total: allKeywords.length,
    categories: Object.values(keywordCategories)
  });
}

export async function POST(request: NextRequest) {
  try {
    const { keyword, category } = await request.json();
    
    if (!keyword || !category) {
      return NextResponse.json({ error: 'Keyword and category are required' }, { status: 400 });
    }
    
    // Generate URL slug
    const slug = keyword.toLowerCase().replace(/\s+/g, '-');
    
    return NextResponse.json({
      success: true,
      keyword,
      category,
      slug,
      url: `/${slug}`
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}