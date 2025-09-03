import Link from 'next/link';
import { keywordsData, keywordCategories } from '@/data/keywords';

export default function HomePage() {
  // Group keywords by category
  const keywordsByCategory = keywordsData.reduce((acc, keyword) => {
    if (!acc[keyword.category]) {
      acc[keyword.category] = [];
    }
    acc[keyword.category].push(keyword);
    return acc;
  }, {} as Record<string, typeof keywordsData>);

  // Sort each category by search volume
  Object.keys(keywordsByCategory).forEach(category => {
    keywordsByCategory[category].sort((a, b) => b.searchVolume - a.searchVolume);
  });

  const categoryInfo = {
    [keywordCategories.LOVE_MESSAGES]: {
      title: 'Love Messages',
      description: 'Express your feelings with beautiful love messages',
      icon: '💕',
      color: 'from-pink-500 to-red-500'
    },
    [keywordCategories.APOLOGY_MESSAGES]: {
      title: 'Apology Messages', 
      description: 'Sincere apologies for any situation',
      icon: '😔',
      color: 'from-blue-500 to-indigo-500'
    },
    [keywordCategories.EMOJI_COLLECTIONS]: {
      title: 'Emoji Collections',
      description: 'Massive emoji collections for social media',
      icon: '😊',
      color: 'from-yellow-500 to-orange-500'
    },
    [keywordCategories.AESTHETIC_SYMBOLS]: {
      title: 'Aesthetic Symbols',
      description: 'Beautiful Unicode symbols and decorations',
      icon: '✨',
      color: 'from-purple-500 to-pink-500'
    },
    [keywordCategories.SALARY_CALCULATORS]: {
      title: 'Salary Calculators',
      description: 'Convert hourly wages to annual salaries',
      icon: '💰',
      color: 'from-green-500 to-emerald-500'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              CopyPaste Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Free tools for generating and copying text, emojis, symbols, and more. 
              Perfect for social media, messaging, and creative expression.
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Tools</h2>
          
          {/* Featured Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "I Love You 1000 Times",
                description: "Generate romantic messages instantly",
                searches: "4,400 monthly searches",
                href: "/i-love-you-1000-times-copy-and-paste",
                icon: "💕"
              },
              {
                title: "1000 Heart Emojis", 
                description: "Beautiful heart emoji collections",
                searches: "3,600 monthly searches",
                href: "/1000-heart-emojis-copy-and-paste",
                icon: "❤️"
              },
              {
                title: "Sorry 100 Times",
                description: "Sincere apology message generator",
                searches: "2,900 monthly searches", 
                href: "/sorry-100-times-copy-and-paste",
                icon: "😔"
              },
              {
                title: "$25/Hour Calculator",
                description: "Convert hourly wage to annual salary",
                searches: "14,800 monthly searches",
                href: "/25-an-hour-is-how-much-a-year", 
                icon: "💰"
              },
              {
                title: "Aesthetic Symbols",
                description: "Beautiful Unicode symbols and decorations",
                searches: "1,000+ monthly searches",
                href: "/aesthetic-symbols-copy-paste",
                icon: "✨"
              },
              {
                title: "Kiss Emojis Collection",
                description: "Romantic kiss emoji generators", 
                searches: "480 monthly searches",
                href: "/1000-kiss-emoji-copy-and-paste",
                icon: "💋"
              }
            ].map((tool, index) => (
              <Link 
                key={index}
                href={tool.href}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-3">{tool.description}</p>
                <div className="text-sm text-blue-600 font-medium">{tool.searches}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-12">
          {Object.entries(keywordsByCategory).map(([category, keywords]) => {
            const info = categoryInfo[category];
            if (!info) return null;
            
            return (
              <div key={category} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{info.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{info.title}</h2>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {keywords.slice(0, 6).map((keyword) => (
                    <Link
                      key={keyword.keyword}
                      href={`/${keyword.keyword.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                        {keyword.keyword}
                      </h3>
                      <div className="text-xs text-gray-500">
                        {keyword.searchVolume.toLocaleString()} searches/month
                      </div>
                    </Link>
                  ))}
                </div>
                
                {keywords.length > 6 && (
                  <div className="mt-4 text-center">
                    <Link 
                      href={`/category/${category}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r text-white rounded-lg hover:shadow-md transition-all"
                      style={{background: `linear-gradient(to right, ${info.color.split(' ')[1]}, ${info.color.split(' ')[3]})`}}
                    >
                      View All {info.title} →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Instant Generation',
                description: 'Generate thousands of messages in seconds'
              },
              {
                icon: '📱',
                title: 'Mobile Friendly',
                description: 'Works perfectly on all devices'
              },
              {
                icon: '🆓',
                title: 'Completely Free',
                description: 'No registration or payment required'
              },
              {
                icon: '🔄',
                title: 'Always Updated',
                description: 'Fresh content and new tools regularly'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}