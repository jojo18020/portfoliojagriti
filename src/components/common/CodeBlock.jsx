import React, { useState } from 'react';
import { Code } from 'lucide-react';

const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4">
      {title && <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>}
      <div className="relative">
        <pre className="bg-[#0d1629] rounded-xl p-4 overflow-x-auto text-sm border border-[#22397130]">
          <code className="text-gray-100 font-mono whitespace-pre">{code}</code>
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label={`Copy ${language} code`}
          title={copied ? 'Copied!' : 'Copy'}
        >
          {copied ? '✓' : <Code className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;