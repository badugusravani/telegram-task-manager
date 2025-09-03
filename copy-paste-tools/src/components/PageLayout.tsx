import Link from 'next/link';
import { keywordsData } from '@/data/keywords';

interface Props {
  title: string;
  description: string;
  keyword: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, description, keyword, children }: Props) {
  // Get related keywords for suggestions
  const getRelatedKeywords = (currentKeyword: string) => {
    return keywordsData
      .filter(k => k.keyword !== currentKeyword)
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .slice(0, 6);
  };
  
  const relatedKeywords = getRelatedKeywords(keyword);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              CopyPaste Tools
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/love-messages" className="text-gray-600 hover:text-gray-900 transition-colors">
                Love Messages
              </Link>
              <Link href="/apology-messages" className="text-gray-600 hover:text-gray-900 transition-colors">
                Apologies
              </Link>
              <Link href="/emoji-collections" className="text-gray-600 hover:text-gray-900 transition-colors">
                Emojis
              </Link>
              <Link href="/aesthetic-symbols" className="text-gray-600 hover:text-gray-900 transition-colors">
                Symbols
              </Link>
              <Link href="/salary-calculator" className="text-gray-600 hover:text-gray-900 transition-colors">
                Calculator
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Page Content */}
        {children}

        {/* Related Tools */}
        {relatedKeywords.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedKeywords.map((relatedKeyword) => (
                <Link
                  key={relatedKeyword.keyword}
                  href={`/${relatedKeyword.keyword.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {relatedKeyword.keyword}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {relatedKeyword.searchVolume.toLocaleString()} monthly searches
                  </p>
                  <div className="text-blue-600 text-sm font-medium">
                    Try this tool →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CopyPaste Tools</h3>
              <p className="text-gray-400 text-sm">
                Free tools for generating and copying text, emojis, symbols, and more. 
                Perfect for social media, messaging, and creative writing.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Text Generators</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/i-love-you-1000-times-copy-and-paste" className="hover:text-white transition-colors">Love Messages</Link></li>
                <li><Link href="/sorry-100-times-copy-and-paste" className="hover:text-white transition-colors">Apology Messages</Link></li>
                <li><Link href="/aesthetic-symbols-copy-paste" className="hover:text-white transition-colors">Aesthetic Symbols</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emoji Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/1000-heart-emojis-copy-and-paste" className="hover:text-white transition-colors">Heart Emojis</Link></li>
                <li><Link href="/1000-kiss-emoji-copy-and-paste" className="hover:text-white transition-colors">Kiss Emojis</Link></li>
                <li><Link href="/emoji-collections" className="hover:text-white transition-colors">All Emojis</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Calculators</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/25-an-hour-is-how-much-a-year" className="hover:text-white transition-colors">Salary Calculator</Link></li>
                <li><Link href="/hourly-to-yearly" className="hover:text-white transition-colors">Hourly to Yearly</Link></li>
                <li><Link href="/wage-calculator" className="hover:text-white transition-colors">Wage Calculator</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CopyPaste Tools. All rights reserved. Free tools for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}