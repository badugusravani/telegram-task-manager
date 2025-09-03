export const siteConfig = {
  name: "CopyPaste Tools",
  description: "Free tools for generating love messages, apology texts, emoji collections, aesthetic symbols, and salary calculators. Copy and paste instantly - no registration required.",
  url: "https://copypaste-tools.com", // Update with your actual domain
  ogImage: "https://copypaste-tools.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/copypastetools",
    github: "https://github.com/copypastetools"
  },
  keywords: [
    "copy and paste",
    "text generator", 
    "emoji collection",
    "aesthetic symbols",
    "love messages",
    "apology messages", 
    "salary calculator",
    "free tools",
    "Unicode symbols",
    "text decorations"
  ]
};

export const generationConfig = {
  // Maximum number of static pages to generate
  maxStaticPages: 1000,
  
  // Number ranges for different categories
  numberRanges: {
    love: [10, 25, 50, 100, 200, 500, 1000, 2000, 3000, 5000, 10000],
    sorry: [10, 25, 50, 100, 200, 500, 1000, 2000, 5000, 10000],
    emoji: [10, 25, 50, 100, 200, 500, 1000, 2000, 5000],
    salary: Array.from({length: 86}, (_, i) => i + 15), // $15-$100/hour
  },
  
  // Priority keywords (will be generated first)
  priorityKeywords: [
    "i love you 1000 times copy and paste",
    "sorry 100 times copy and paste", 
    "1000 heart emojis copy and paste",
    "25 an hour is how much a year",
    "aesthetic symbols copy paste"
  ],
  
  // Language variations
  languages: {
    english: {
      love: ["i love you", "love you", "i love u"],
      sorry: ["sorry", "i'm sorry", "apologize"],
      emoji: ["emoji", "emojis"]
    },
    spanish: {
      love: ["te amo", "te quiero"],
      sorry: ["perdón", "lo siento"],
      symbols: ["símbolos", "simbolos"]
    }
  }
};

export const seoConfig = {
  // Default meta tags
  defaultTitle: "CopyPaste Tools - Free Text Generators & Copy Paste Tools",
  titleTemplate: "%s | CopyPaste Tools",
  
  // Structured data templates
  structuredDataTemplates: {
    WebApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer", 
        "price": "0",
        "priceCurrency": "USD"
      },
      "isAccessibleForFree": true
    },
    
    HowTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to copy and paste text",
      "description": "Step by step guide to copy and paste generated text",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Generate Text",
          "text": "Use our generator to create your desired text"
        },
        {
          "@type": "HowToStep", 
          "name": "Click Copy",
          "text": "Click the copy button next to the generated text"
        },
        {
          "@type": "HowToStep",
          "name": "Paste Anywhere",
          "text": "Paste the text in your desired location"
        }
      ]
    }
  },
  
  // Canonical URL patterns
  canonicalPatterns: {
    removeParams: ['utm_source', 'utm_medium', 'utm_campaign'],
    normalizeCase: true,
    removeTrailingSlash: true
  }
};