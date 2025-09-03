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

export default function EmojiCollectionPage({ keyword, numbers }: Props) {
  const [selectedCount, setSelectedCount] = useState(numbers[0] || 100);
  const [selectedEmoji, setSelectedEmoji] = useState('❤️');
  
  const emojiCollections = {
    '❤️': { name: 'Hearts', emoji: '❤️' },
    '💋': { name: 'Kisses', emoji: '💋' },
    '👑': { name: 'Crowns', emoji: '👑' },
    '💎': { name: 'Diamonds', emoji: '💎' },
    '✨': { name: 'Sparkles', emoji: '✨' },
    '🌟': { name: 'Stars', emoji: '🌟' },
    '💖': { name: 'Pink Hearts', emoji: '💖' },
    '💕': { name: 'Two Hearts', emoji: '💕' },
    '😘': { name: 'Kiss Face', emoji: '😘' },
    '🥰': { name: 'Love Face', emoji: '🥰' }
  };
  
  const generateEmojiCollection = (emoji: string, count: number) => {
    return emoji.repeat(count);
  };
  
  const generateEmojiGrid = (emoji: string, count: number) => {
    const emojis = [];
    for (let i = 0; i < count; i++) {
      emojis.push(emoji);
      if ((i + 1) % 10 === 0) emojis.push('\n');
    }
    return emojis.join('');
  };
  
  const generateEmojiPattern = (emoji: string, count: number) => {
    const patterns = [
      `${emoji} `,
      `${emoji}${emoji} `,
      `${emoji}${emoji}${emoji} `,
      `${emoji} ${emoji} `,
      `${emoji}💫${emoji} `
    ];
    
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(patterns[i % patterns.length]);
    }
    return result.join('');
  };
  
  const emojiCollection = generateEmojiCollection(selectedEmoji, selectedCount);
  const emojiGrid = generateEmojiGrid(selectedEmoji, selectedCount);
  const emojiPattern = generateEmojiPattern(selectedEmoji, selectedCount);
  
  return (
    <PageLayout 
      title={`${keyword} - Free Emoji Collections`}
      description={`Generate and copy ${selectedCount} ${emojiCollections[selectedEmoji as keyof typeof emojiCollections]?.name || 'emojis'} instantly. Perfect for social media and messaging.`}
      keyword={keyword}
    >
      <div className="max-w-4xl mx-auto">
        {/* Emoji Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Emoji Type</h2>
          <div className="grid grid-cols-5 gap-2">
            {Object.entries(emojiCollections).map(([emoji, info]) => (
              <button
                key={emoji}
                onClick={() => setSelectedEmoji(emoji)}
                className={`p-4 rounded-lg text-2xl transition-colors ${
                  selectedEmoji === emoji
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                title={info.name}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Count Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Number of Emojis</h2>
          <div className="flex flex-wrap gap-2">
            {[10, 50, 100, 500, 1000, 5000, 10000].map(count => (
              <button
                key={count}
                onClick={() => setSelectedCount(count)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCount === count
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {count.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Content */}
        <div className="space-y-8">
          {/* Continuous Emoji Collection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {selectedCount.toLocaleString()} {emojiCollections[selectedEmoji as keyof typeof emojiCollections]?.name} Emojis
              </h3>
              <CopyButton text={emojiCollection} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <div className="text-2xl leading-relaxed break-all">{emojiCollection}</div>
            </div>
          </div>

          {/* Emoji Grid */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Emoji Grid (10 per line)</h3>
              <CopyButton text={emojiGrid} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-2xl leading-relaxed">{emojiGrid}</pre>
            </div>
          </div>

          {/* Emoji Pattern */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Decorative Emoji Pattern</h3>
              <CopyButton text={emojiPattern} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <div className="text-2xl leading-relaxed break-all">{emojiPattern}</div>
            </div>
          </div>

          {/* Emoji Combinations */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Popular Emoji Combinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Love Combo', emojis: '❤️💕💖💗💓💘' },
                { name: 'Sparkle Combo', emojis: '✨🌟💫⭐🔆💥' },
                { name: 'Crown Combo', emojis: '👑💎✨🌟👸🤴' },
                { name: 'Kiss Combo', emojis: '💋😘😍🥰💕❤️' }
              ].map(combo => (
                <div key={combo.name} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{combo.name}</h4>
                    <CopyButton text={combo.emojis.repeat(Math.ceil(selectedCount / 6))} />
                  </div>
                  <div className="text-2xl">{combo.emojis}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>How to Use {keyword}</h2>
          <p>
            Our emoji collection generator lets you create {selectedCount.toLocaleString()} beautiful emojis 
            that you can copy and paste anywhere. Perfect for social media posts, text messages, 
            Instagram captions, and adding emotional expression to your digital communication.
          </p>
          
          <h3>Popular Emoji Uses:</h3>
          <ul>
            <li>Instagram and TikTok captions</li>
            <li>WhatsApp and text messages</li>
            <li>Discord and gaming chats</li>
            <li>Email signatures</li>
            <li>Social media bios</li>
          </ul>
          
          <h3>Emoji Categories:</h3>
          <ul>
            <li>❤️ Heart Emojis - Express love and affection</li>
            <li>💋 Kiss Emojis - Show romance and passion</li>
            <li>👑 Crown Emojis - Represent royalty and excellence</li>
            <li>✨ Sparkle Emojis - Add magic and excitement</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}