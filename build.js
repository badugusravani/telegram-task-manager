import { generatePages } from './utils/pageGenerator.js';
import { generateSitemapFile } from './utils/sitemap.js';
import fs from 'fs-extra';
import path from 'path';

async function build() {
  try {
    console.log('🚀 Starting build process...');
    
    // Ensure public directory exists
    await fs.ensureDir('./public');
    
    // Generate static pages
    console.log('📄 Generating static pages...');
    await generatePages();
    
    // Generate sitemap
    console.log('🗺️ Generating sitemap...');
    await generateSitemapFile();
    
    // Copy static assets
    console.log('📁 Copying static assets...');
    await fs.copy('./views', './public/views');
    
    console.log('✅ Build completed successfully!');
    console.log('📊 Generated files:');
    console.log('   - Static HTML pages for all keywords');
    console.log('   - Sitemap.xml');
    console.log('   - CSS styles');
    console.log('   - Static assets');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();