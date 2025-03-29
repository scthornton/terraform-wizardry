
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'hcl', 
  title,
  className 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "relative rounded-md overflow-hidden border border-border bg-black text-white font-mono text-sm my-4",
      className
    )}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-400 font-medium ml-2">{title}</span>
          </div>
          <div className="text-xs text-gray-400">{language.toUpperCase()}</div>
        </div>
      )}
      
      <div className="relative">
        <pre className="p-4 overflow-x-auto">{code}</pre>
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeBlock;
