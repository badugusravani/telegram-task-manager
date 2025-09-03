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

export default function TextDecorationsPage({ keyword }: Props) {
  const [inputText, setInputText] = useState('Your Text Here');
  
  const textStyles = {
    bold: {
      name: 'Bold Text',
      transform: (text: string) => text.split('').map(char => {
        const boldMap: {[key: string]: string} = {
          'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
          'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
          'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
          'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
          'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
          'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
        };
        return boldMap[char] || char;
      }).join('')
    },
    italic: {
      name: 'Italic Text',
      transform: (text: string) => text.split('').map(char => {
        const italicMap: {[key: string]: string} = {
          'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
          'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
          'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
          'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
          'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
          'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
        };
        return italicMap[char] || char;
      }).join('')
    },
    cursive: {
      name: 'Cursive Text',
      transform: (text: string) => text.split('').map(char => {
        const cursiveMap: {[key: string]: string} = {
          'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
          'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
          'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
          'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
          'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
          'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
        };
        return cursiveMap[char] || char;
      }).join('')
    },
    bubble: {
      name: 'Bubble Text',
      transform: (text: string) => text.split('').map(char => {
        const bubbleMap: {[key: string]: string} = {
          'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
          'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
          'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
          'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
          'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
          'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
          '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨', '0': '⓪'
        };
        return bubbleMap[char] || char;
      }).join('')
    },
    squared: {
      name: 'Squared Text',
      transform: (text: string) => text.split('').map(char => {
        const squaredMap: {[key: string]: string} = {
          'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹',
          'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃',
          'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉'
        };
        return squaredMap[char.toLowerCase()] || char;
      }).join('')
    }
  };
  
  return (
    <PageLayout 
      title={`${keyword} - Text Decorations`}
      description="Transform your text with beautiful Unicode styles. Copy and paste decorated text for social media."
      keyword={keyword}
    >
      <div className="max-w-4xl mx-auto">
        {/* Text Input */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Text Decorator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Enter your text:</label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                placeholder="Type your text here..."
              />
            </div>
          </div>
        </div>

        {/* Styled Text Outputs */}
        <div className="space-y-6">
          {Object.entries(textStyles).map(([key, style]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{style.name}</h3>
                <CopyButton text={style.transform(inputText)} />
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-mono break-all">
                  {style.transform(inputText)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-made Decorations */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6">Pre-made Text Decorations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Love Border',
                text: '♡ ♡ ♡ Your Text Here ♡ ♡ ♡',
                pattern: '♡ ♡ ♡ {text} ♡ ♡ ♡'
              },
              {
                name: 'Star Frame',
                text: '✧･ﾟ: * Your Text Here *:･ﾟ✧',
                pattern: '✧･ﾟ: * {text} *:･ﾟ✧'
              },
              {
                name: 'Crown Style',
                text: '👑 Your Text Here 👑',
                pattern: '👑 {text} 👑'
              },
              {
                name: 'Sparkle Wrap',
                text: '✨ Your Text Here ✨',
                pattern: '✨ {text} ✨'
              },
              {
                name: 'Arrow Pointer',
                text: '➤ Your Text Here ←',
                pattern: '➤ {text} ←'
              },
              {
                name: 'Diamond Frame',
                text: '◆ Your Text Here ◆',
                pattern: '◆ {text} ◆'
              }
            ].map((decoration, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{decoration.name}</h4>
                  <CopyButton text={decoration.pattern.replace('{text}', inputText)} size="sm" />
                </div>
                <div className="text-lg font-mono">
                  {decoration.pattern.replace('{text}', inputText)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>How to Use {keyword}</h2>
          <p>
            Our text decoration tool transforms your regular text into beautiful styled text using Unicode characters. 
            Perfect for making your social media posts, usernames, and messages stand out with unique formatting.
          </p>
          
          <h3>Text Style Options:</h3>
          <ul>
            <li><strong>Bold Text:</strong> Make your text appear bold using Unicode bold characters</li>
            <li><strong>Italic Text:</strong> Create slanted, elegant text for emphasis</li>
            <li><strong>Cursive Text:</strong> Beautiful script-style lettering for formal occasions</li>
            <li><strong>Bubble Text:</strong> Fun circular letters perfect for playful messages</li>
            <li><strong>Squared Text:</strong> Bold, blocky letters that command attention</li>
          </ul>
          
          <h3>Popular Uses:</h3>
          <ul>
            <li>Social media bios and posts</li>
            <li>Gaming usernames and clan names</li>
            <li>Discord server and channel names</li>
            <li>WhatsApp status messages</li>
            <li>Email signatures</li>
            <li>Creative writing and poetry</li>
          </ul>
          
          <h3>Tips for Using Decorated Text:</h3>
          <ul>
            <li>Not all platforms support Unicode text styles</li>
            <li>Some characters may not display on older devices</li>
            <li>Use sparingly for maximum impact</li>
            <li>Test on your target platform before publishing</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}