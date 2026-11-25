'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExternalLink } from 'lucide-react';

export default function MarkdownBody({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children, ...props }) => {
          const isExternal = href?.startsWith('http');
          return (
            <a
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-baseline gap-1"
              {...props}
            >
              {children}
              {isExternal && <ExternalLink className="inline h-3 w-3 shrink-0 opacity-60" />}
            </a>
          );
        },
        h1: ({ children }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
          return <h1 id={id}>{children}</h1>;
        },
        h2: ({ children }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
          return <h2 id={id}>{children}</h2>;
        },
        h3: ({ children }) => {
          const text = String(children);
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
          return <h3 id={id}>{children}</h3>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
