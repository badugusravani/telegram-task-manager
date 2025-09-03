'use client';

import { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

interface Props {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export default function CopyButton({ text, size = 'md', variant = 'primary' }: Props) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const variantClasses = {
    primary: copied 
      ? 'bg-green-500 hover:bg-green-600 text-white' 
      : 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: copied
      ? 'bg-green-100 hover:bg-green-200 text-green-800 border border-green-300'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
  };
  
  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200
        ${sizeClasses[size]} ${variantClasses[variant]}
        ${copied ? 'scale-105' : 'hover:scale-105'}
      `}
    >
      {copied ? (
        <>
          <CheckIcon className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <ClipboardIcon className="w-4 h-4" />
          Copy
        </>
      )}
    </button>
  );
}