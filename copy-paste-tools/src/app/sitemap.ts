import { MetadataRoute } from 'next';
import { getAllKeywords } from '@/data/keywords';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://copypaste-tools.com'; // Replace with your actual domain
  
  // Get all keywords and create URLs
  const allKeywords = getAllKeywords();
  
  const keywordUrls = allKeywords.slice(0, 1000).map(keyword => ({
    url: `${baseUrl}/${keyword.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/love-messages`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apology-messages`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/emoji-collections`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aesthetic-symbols`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/salary-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ];
  
  return [...mainPages, ...keywordUrls];
}