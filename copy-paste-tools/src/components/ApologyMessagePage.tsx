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

export default function ApologyMessagePage({ keyword, numbers }: Props) {
  const [selectedCount, setSelectedCount] = useState(numbers[0] || 100);
  
  const generateApologyMessage = (count: number) => {
    const messages = [];
    for (let i = 1; i <= count; i++) {
      messages.push(`${i}. Sorry 😔`);
    }
    return messages.join('\n');
  };
  
  const generateSimpleApology = (count: number) => {
    return Array.from({length: count}, () => 'Sorry').join('\n');
  };
  
  const generateHeartfeltApology = (count: number) => {
    const apologies = [
      'I&apos;m truly sorry',
      'Please forgive me',
      'I apologize sincerely',
      'Sorry from my heart',
      'I regret my actions'
    ];
    
    const messages = [];
    for (let i = 1; i <= count; i++) {
      const apology = apologies[(i - 1) % apologies.length];
      messages.push(`${i}. ${apology} 💔`);
    }
    return messages.join('\n');
  };
  
  const apologyMessage = generateApologyMessage(selectedCount);
  const simpleApology = generateSimpleApology(selectedCount);
  const heartfeltApology = generateHeartfeltApology(selectedCount);
  
  return (
    <PageLayout 
      title={`${keyword} - Free Apology Messages`}
      description={`Generate and copy ${selectedCount} apology messages instantly. Perfect for making amends and showing you care.`}
      keyword={keyword}
    >
      <div className="max-w-4xl mx-auto">
        {/* Count Selector */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Number of Apologies</h2>
          <div className="flex flex-wrap gap-2">
            {[10, 50, 100, 500, 1000, 5000, 10000].map(count => (
              <button
                key={count}
                onClick={() => setSelectedCount(count)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCount === count
                    ? 'bg-blue-500 text-white'
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
          {/* Numbered Apology Messages */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Numbered Apology Messages ({selectedCount.toLocaleString()})</h3>
              <CopyButton text={apologyMessage} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">{apologyMessage}</pre>
            </div>
          </div>

          {/* Simple Sorry List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Simple Sorry List ({selectedCount.toLocaleString()} times)</h3>
              <CopyButton text={simpleApology} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">{simpleApology}</pre>
            </div>
          </div>

          {/* Heartfelt Apologies */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Heartfelt Apologies ({selectedCount.toLocaleString()})</h3>
              <CopyButton text={heartfeltApology} />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm">{heartfeltApology}</pre>
            </div>
          </div>

          {/* Custom Apology Generator */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Custom Apology Generator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Custom Apology Message:</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="I&apos;m sorry"
                  id="customApology"
                />
              </div>
              <button
                onClick={() => {
                  const input = document.getElementById('customApology') as HTMLInputElement;
                  const customText = input.value || 'I&apos;m sorry';
                  const customMessage = Array.from({length: selectedCount}, (_, i) => `${i + 1}. ${customText} 😔`).join('\n');
                  navigator.clipboard.writeText(customMessage);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Generate & Copy Custom Apology
              </button>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>How to Use {keyword}</h2>
          <p>
            Our free apology message generator helps you create {selectedCount.toLocaleString()} sincere apology messages 
            that you can copy and paste. Perfect for making amends, showing remorse, or expressing genuine regret 
            in text messages, emails, or social media posts.
          </p>
          
          <h3>When to Use Apology Messages:</h3>
          <ul>
            <li>Making amends with friends or family</li>
            <li>Apologizing for mistakes or misunderstandings</li>
            <li>Showing genuine remorse and regret</li>
            <li>Professional apologies in work settings</li>
            <li>Social media apology posts</li>
          </ul>
          
          <h3>Popular Apology Counts:</h3>
          <ul>
            <li>Sorry 100 times - Standard apology length</li>
            <li>Sorry 1000 times - Deep regret expression</li>
            <li>Sorry 10000 times - Ultimate sincere apology</li>
          </ul>
          
          <h3>Tips for Effective Apologies:</h3>
          <ul>
            <li>Be specific about what you&apos;re apologizing for</li>
            <li>Take full responsibility for your actions</li>
            <li>Express genuine remorse</li>
            <li>Offer to make things right</li>
            <li>Give the other person time to process</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}