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

export default function LoveMessagePage({ keyword, numbers }: Props) {
  const [selectedCount, setSelectedCount] = useState(numbers[0] || 100);
  
  const generateLoveMessage = (count: number) => {
    const messages = [];
    for (let i = 1; i <= count; i++) {
      messages.push(`${i}. I love you ❤️`);
    }
    return messages.join('\n');
  };
  
  const generateNumberedLoveMessage = (count: number) => {
    const messages = [];
    for (let i = 1; i <= count; i++) {
      messages.push(`I love you ${i} times`);
    }
    return messages.join('\n');
  };
  
  const generateHeartMessage = (count: number) => {
    return '❤️'.repeat(count);
  };
  
  const loveMessage = generateLoveMessage(selectedCount);
  const numberedMessage = generateNumberedLoveMessage(selectedCount);
  const heartMessage = generateHeartMessage(selectedCount);
  
  return (
    <PageLayout 
      title={`${keyword} - Free Love Messages`}
      description={`Generate and copy ${selectedCount} love messages instantly. Express your feelings with beautiful formatted text.`}
      keyword={keyword}
    >
      <div className="max-w-4xl mx-auto">
        {/* Count Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Number of Messages</h2>
          <div className="flex flex-wrap gap-2">
            {[10, 50, 100, 500, 1000, 2000, 3000, 5000, 10000].map(count => (
              <button
                key={count}
                onClick={() => setSelectedCount(count)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCount === count
                    ? 'bg-pink-500 text-white'
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
          {/* Numbered Love Messages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Numbered Love Messages ({selectedCount.toLocaleString()})</h3>
              <CopyButton text={loveMessage} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">{loveMessage}</pre>
            </div>
          </div>

          {/* Sequential Love Messages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Sequential Love Messages (1 to {selectedCount.toLocaleString()})</h3>
              <CopyButton text={numberedMessage} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">{numberedMessage}</pre>
            </div>
          </div>

          {/* Heart Emojis */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedCount.toLocaleString()} Heart Emojis</h3>
              <CopyButton text={heartMessage} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <div className="text-2xl leading-relaxed break-all">{heartMessage}</div>
            </div>
          </div>

          {/* Custom Message Generator */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Custom Love Message Generator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Custom Message:</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="I love you"
                  id="customMessage"
                />
              </div>
              <button
                onClick={() => {
                  const input = document.getElementById('customMessage') as HTMLInputElement;
                  const customText = input.value || 'I love you';
                  const customMessage = Array.from({length: selectedCount}, (_, i) => `${i + 1}. ${customText} ❤️`).join('\n');
                  navigator.clipboard.writeText(customMessage);
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Generate & Copy Custom Message
              </button>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>How to Use {keyword}</h2>
          <p>
            Our free love message generator allows you to create {selectedCount.toLocaleString()} beautiful love messages 
            that you can copy and paste anywhere. Whether you&apos;re expressing your feelings on social media, 
            in text messages, or in a letter, these formatted love messages will help you show how much you care.
          </p>
          
          <h3>Features:</h3>
          <ul>
            <li>Generate up to 10,000 love messages instantly</li>
            <li>Multiple formats: numbered, sequential, and emoji-based</li>
            <li>One-click copy to clipboard</li>
            <li>Custom message generator</li>
            <li>Mobile-friendly design</li>
          </ul>
          
          <h3>Popular Love Message Counts:</h3>
          <ul>
            <li>I love you 100 times - Perfect for quick expressions</li>
            <li>I love you 1000 times - Show deeper commitment</li>
            <li>I love you 10000 times - Ultimate expression of love</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}