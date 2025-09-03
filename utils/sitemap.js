import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { keywords } from '../data/keywords.js';

export async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });
  
  // Add homepage
  sitemap.write({
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString()
  });
  
  // Add all keyword pages
  keywords.forEach(keyword => {
    sitemap.write({
      url: `/${keyword.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    });
  });
  
  sitemap.end();
  return await streamToPromise(sitemap);
}

export async function generateSitemapFile() {
  const sitemap = await generateSitemap();
  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(sitemap);
  writeStream.end();
  console.log('Sitemap generated successfully');
}