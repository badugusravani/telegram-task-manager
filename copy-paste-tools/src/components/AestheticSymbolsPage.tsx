'use client';

import { useState } from 'react';
import { KeywordData } from '@/data/keywords';
import CopyButton from './CopyButton';
import PageLayout from './PageLayout';

interface Props {
  keyword: string;
  data: KeywordData;
  numbers: number[];
}

export default function AestheticSymbolsPage({ keyword }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('borders');
  
  const symbolCategories = {
    borders: {
      name: 'Borders & Dividers',
      symbols: [
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
        '═══════════════════════════════════════════════════',
        '▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂',
        '⋅•⋅⊰∙∘☽༓☾∘∙⊱⋅•⋅⋅•⋅⊰∙∘☽༓☾∘∙⊱⋅•⋅',
        '✧･ﾟ: *✧･ﾟ:*:･ﾟ✧*:･ﾟ✧･ﾟ: *✧･ﾟ:*',
        '▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▁▂▃▄▅▆▇█▇▆▅▄▃▂▁',
        '◤◥◤◥◤◥◤◥◤◥◤◥◤◥◤◥◤◥◤◥◤◥◤◥◤◥'
      ]
    },
    decorative: {
      name: 'Decorative Elements',
      symbols: [
        '♡ ♢ ♧ ♤ ♡ ♢ ♧ ♤ ♡ ♢ ♧ ♤',
        '◈ ◇ ◆ ◇ ◈ ◇ ◆ ◇ ◈ ◇ ◆ ◇',
        '✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ✱ ✲',
        '❈ ❉ ❊ ❋ ❈ ❉ ❊ ❋ ❈ ❉ ❊ ❋',
        '❅ ❆ ❇ ❈ ❅ ❆ ❇ ❈ ❅ ❆ ❇ ❈',
        '⚘ ⚜ ⚝ ⚞ ⚟ ⚠ ⚡ ⚘ ⚜ ⚝ ⚞',
        '◦ ◯ ○ ◉ ● ◦ ◯ ○ ◉ ● ◦ ◯',
        '▫ ▪ ◾ ◽ ▫ ▪ ◾ ◽ ▫ ▪ ◾ ◽'
      ]
    },
    arrows: {
      name: 'Arrows & Pointers',
      symbols: [
        '→ ← ↑ ↓ ↗ ↘ ↙ ↖ → ← ↑ ↓',
        '⇒ ⇐ ⇑ ⇓ ⇗ ⇘ ⇙ ⇖ ⇒ ⇐ ⇑ ⇓',
        '➤ ➜ ➝ ➞ ➟ ➠ ➡ ➢ ➣ ➤ ➜ ➝',
        '⟶ ⟷ ⟸ ⟹ ⟺ ⟻ ⟼ ⟽ ⟾ ⟿ ⟶ ⟷',
        '▶ ◀ ▲ ▼ ▶ ◀ ▲ ▼ ▶ ◀ ▲ ▼',
        '⇀ ⇁ ⇂ ⇃ ⇄ ⇅ ⇆ ⇇ ⇈ ⇉ ⇊ ⇋',
        '↺ ↻ ⇴ ⇵ ⇶ ⇷ ⇸ ⇹ ⇺ ↺ ↻ ⇴',
        '⤴ ⤵ ⤶ ⤷ ⤸ ⤹ ⤺ ⤻ ⤴ ⤵ ⤶ ⤷'
      ]
    },
    brackets: {
      name: 'Brackets & Frames',
      symbols: [
        '【 】 〖 〗 〘 〙 〚 〛 【 】 〖 〗',
        '《 》 「 」 『 』 〈 〉 《 》 「 」',
        '⌈ ⌉ ⌊ ⌋ ⌌ ⌍ ⌎ ⌏ ⌈ ⌉ ⌊ ⌋',
        '⦗ ⦘ ⦙ ⦚ ⦛ ⦜ ⦝ ⦞ ⦗ ⦘ ⦙ ⦚',
        '⟦ ⟧ ⟨ ⟩ ⟪ ⟫ ⟬ ⟭ ⟦ ⟧ ⟨ ⟩',
        '⦃ ⦄ ⦅ ⦆ ⦇ ⦈ ⦉ ⦊ ⦃ ⦄ ⦅ ⦆',
        '⧼ ⧽ ⧾ ⧿ ⨀ ⨁ ⨂ ⨃ ⧼ ⧽ ⧾ ⧿',
        '⸨ ⸩ ⸪ ⸫ ⸬ ⸭ ⸮ ⸨ ⸩ ⸪ ⸫'
      ]
    },
    stars: {
      name: 'Stars & Sparkles',
      symbols: [
        '✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ✱ ✲',
        '⋆ ⭒ ⭑ ⭐ ⭒ ⋆ ⭑ ⭐ ⋆ ⭒ ⭑ ⭐',
        '✢ ✣ ✤ ✥ ✦ ✧ ✨ ✩ ✪ ✫ ✬ ✭',
        '⚹ ⚺ ⚻ ⚼ ⚹ ⚺ ⚻ ⚼ ⚹ ⚺ ⚻ ⚼',
        '✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁',
        '❂ ❃ ❄ ❅ ❆ ❇ ❈ ❉ ❊ ❋ ❂ ❃',
        '⭑ ⭒ ⭓ ⭔ ⭕ ⭖ ⭗ ⭘ ⭙ ⭚ ⭛ ⭜',
        '✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦'
      ]
    },
    hearts: {
      name: 'Hearts & Love',
      symbols: [
        '♡ ♥ ❤ ❥ ❣ ❦ ❧ ♡ ♥ ❤ ❥ ❣',
        '💕 💖 💗 💘 💙 💚 💛 💜 🖤 🤍 🤎 💔',
        '💝 💞 💟 💠 💡 💢 💣 💤 💥 💦 💧 💨',
        '♡⃕ ♡⃤ ♡⃗ ♡⃘ ♡⃙ ♡⃚ ♡⃛ ♡⃜ ♡⃝ ♡⃞ ♡⃟ ♡⃠',
        '❤︎ ❤️‍🔥 ❤️‍🩹 💘 💝 💖 💗 💓 💞 💕 💟 ❣️',
        '♥️ ♡ ♥︎ ♡︎ ❥ ❣️ ❤️ 🧡 💛 💚 💙 💜',
        '🤍 🖤 🤎 💔 ❤️‍🔥 ❤️‍🩹 💋 💌 💐 🌹 🌺 🌻',
        '♡ ♥ ♡ ♥ ♡ ♥ ♡ ♥ ♡ ♥ ♡ ♥'
      ]
    }
  };
  
  return (
    <PageLayout 
      title={`${keyword} - Free Aesthetic Symbols`}
      description={`Copy and paste beautiful aesthetic symbols and decorations. Perfect for social media, gaming, and text decoration.`}
      keyword={keyword}
    >
      <div className="max-w-4xl mx-auto">
        {/* Category Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Symbol Category</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(symbolCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === key
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Symbol Collection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">
            {symbolCategories[selectedCategory as keyof typeof symbolCategories].name}
          </h3>
          <div className="space-y-4">
            {symbolCategories[selectedCategory as keyof typeof symbolCategories].symbols.map((symbolLine, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Pattern {index + 1}</span>
                  <CopyButton text={symbolLine} />
                </div>
                <div className="text-lg font-mono break-all">{symbolLine}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Symbol Generator */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Custom Symbol Generator</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Symbol/Character:</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="✧"
                  id="customSymbol"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Repeat Count:</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="50"
                  id="symbolCount"
                  min="1"
                  max="1000"
                />
              </div>
            </div>
            <button
              onClick={() => {
                const symbolInput = document.getElementById('customSymbol') as HTMLInputElement;
                const countInput = document.getElementById('symbolCount') as HTMLInputElement;
                const symbol = symbolInput.value || '✧';
                const count = parseInt(countInput.value) || 50;
                const customPattern = symbol.repeat(count);
                navigator.clipboard.writeText(customPattern);
              }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Generate & Copy Custom Pattern
            </button>
          </div>
        </div>

        {/* Popular Symbol Sets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Coquette Symbols</h3>
            <div className="space-y-2">
              {[
                '𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭 𖹭',
                '⋆ ˚｡⋆୨୧˚ ˚୨୧⋆｡˚ ⋆',
                '♡ ♱ ♡ ♱ ♡ ♱ ♡ ♱ ♡',
                '𓍢ִ໋🌷͙֒ ᰔᩚ 𓍢ִ໋🌷͙֒ ᰔᩚ',
                '‧₊˚🖇️✩ ₊˚🎧⊹♡ ‧₊˚🖇️✩'
              ].map((pattern, index) => (
                <div key={index} className="flex justify-between items-center bg-pink-50 rounded p-2">
                  <span className="font-mono text-sm">{pattern}</span>
                  <CopyButton text={pattern} size="sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Dark Academia Symbols</h3>
            <div className="space-y-2">
              {[
                '𖤍 𖤍 𖤍 𖤍 𖤍 𖤍 𖤍 𖤍',
                '⚜️ ⚱️ 🕯️ 📜 ⚜️ ⚱️ 🕯️ 📜',
                '♰ ♱ ⚰ ⚱ ♰ ♱ ⚰ ⚱',
                '𖦹 𖦹 𖦹 𖦹 𖦹 𖦹 𖦹 𖦹',
                '◊ ◈ ◇ ◆ ◊ ◈ ◇ ◆ ◊'
              ].map((pattern, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-100 rounded p-2">
                  <span className="font-mono text-sm">{pattern}</span>
                  <CopyButton text={pattern} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>How to Use {keyword}</h2>
          <p>
            Our aesthetic symbols collection provides beautiful Unicode characters and decorative elements 
            that you can copy and paste to enhance your text. Perfect for social media bios, gaming usernames, 
            Discord messages, and creative writing.
          </p>
          
          <h3>Popular Symbol Categories:</h3>
          <ul>
            <li><strong>Borders & Dividers:</strong> Perfect for separating content and creating visual breaks</li>
            <li><strong>Decorative Elements:</strong> Add flair to your text with beautiful ornamental symbols</li>
            <li><strong>Arrows & Pointers:</strong> Direct attention and create flow in your content</li>
            <li><strong>Brackets & Frames:</strong> Highlight important text and create emphasis</li>
            <li><strong>Stars & Sparkles:</strong> Add magic and excitement to your messages</li>
            <li><strong>Hearts & Love:</strong> Express emotions and create romantic aesthetics</li>
          </ul>
          
          <h3>Where to Use Aesthetic Symbols:</h3>
          <ul>
            <li>Instagram and TikTok bios</li>
            <li>Discord server names and channels</li>
            <li>Gaming usernames and clan tags</li>
            <li>WhatsApp status messages</li>
            <li>Twitter display names</li>
            <li>Email signatures</li>
            <li>Blog post decorations</li>
          </ul>
          
          <h3>Trending Aesthetic Styles:</h3>
          <ul>
            <li><strong>Coquette:</strong> Soft, feminine symbols with bows and hearts</li>
            <li><strong>Dark Academia:</strong> Gothic and scholarly symbols</li>
            <li><strong>Y2K:</strong> Retro futuristic symbols and patterns</li>
            <li><strong>Minimalist:</strong> Clean, simple geometric shapes</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}