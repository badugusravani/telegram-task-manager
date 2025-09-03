interface Props {
  keyword: string;
  category: string;
  description: string;
}

export default function StructuredData({ keyword, description }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${keyword} - CopyPaste Tools`,
    "description": description,
    "url": `https://copypaste-tools.com/${keyword.toLowerCase().replace(/\s+/g, '-')}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "CopyPaste Tools"
    },
    "keywords": [keyword, "copy and paste", "text generator", "free tools"],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "browserRequirements": "Requires JavaScript"
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}