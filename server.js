import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { generateSitemap } from './utils/sitemap.js';
import { generatePages } from './utils/pageGenerator.js';
import { keywords } from './data/keywords.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Generate pages on startup
await generatePages();

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Copy Paste Tools - Free Online Utilities',
    description: 'Free online tools for copy paste content, text generators, and utilities. Generate text, symbols, and more instantly.',
    keywords: keywords.slice(0, 20) // Show top 20 keywords on homepage
  });
});

// Category listing route
app.get('/category/:name', (req, res) => {
  const name = req.params.name;
  const list = keywords.filter(k => k.category === name);
  if (list.length === 0) {
    return res.status(404).render('404', {
      title: 'Category Not Found',
      description: 'The requested category does not exist.'
    });
  }
  res.render('category', {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Tools - Browse`,
    description: `Browse ${name} tools and generators.`,
    category: name,
    items: list
  });
});

app.get('/sitemap.xml', async (req, res) => {
  const sitemap = await generateSitemap();
  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml`);
});

// All tools page
app.get('/tools', (req, res) => {
  res.render('tools', {
    title: 'All Tools - Copy Paste Tools',
    description: 'Browse all copy paste and calculator tools.',
    keywords
  });
});

// Search route (must be before catch-all keyword route)
app.get('/search', (req, res) => {
  const q = (req.query.q || '').toString().toLowerCase();
  const results = q ? keywords.filter(k =>
    k.title.toLowerCase().includes(q) ||
    k.description.toLowerCase().includes(q) ||
    k.keyword.toLowerCase().includes(q) ||
    (k.tags || []).join(' ').toLowerCase().includes(q)
  ).slice(0, 100) : [];

  res.render('search', {
    title: q ? `Search: ${q}` : 'Search Tools',
    description: 'Find any tool quickly by name, category, or purpose.',
    q,
    results
  });
});

// Dynamic route for keyword pages
app.get('/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  const keywordData = keywords.find(k => k.slug === keyword);
  
  if (!keywordData) {
    return res.status(404).render('404', {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.'
    });
  }

  res.render('keyword-page', {
    title: keywordData.title,
    description: keywordData.description,
    keyword: keywordData,
    relatedKeywords: keywords.filter(k => k.category === keywordData.category).slice(0, 10)
  });
});

// API routes
app.get('/api/keywords', (req, res) => {
  const { category, limit = 50 } = req.query;
  let filteredKeywords = keywords;
  
  if (category) {
    filteredKeywords = keywords.filter(k => k.category === category);
  }
  
  res.json({
    keywords: filteredKeywords.slice(0, parseInt(limit)),
    total: filteredKeywords.length
  });
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(keywords.map(k => k.category))];
  res.json({ categories });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: 'Server Error',
    description: 'Something went wrong. Please try again later.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see your tools website`);
});