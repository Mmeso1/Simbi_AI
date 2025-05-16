import React from "react";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  let cleanedContent = content.replace(/•\s*/g, "\n- ");
  cleanedContent = cleanedContent.replace(/([^\n])\n- /g, "$1\n\n- ");

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p({ children, ...props }) {
          const containsPre = React.Children.toArray(children).some(
            (child: any) => typeof child === "object" && child?.type === "pre"
          );

          if (containsPre) {
            return <>{children}</>;
          }
          return (
            <p className="mb-4" {...props}>
              {children}
            </p>
          );
        },
        h1({ children, ...props }) {
          return (
            <h1 className="text-2xl font-bold mb-4" {...props}>
              {children}
            </h1>
          );
        },
        h2({ children, ...props }) {
          return (
            <h2 className="text-xl font-semibold mb-3" {...props}>
              {children}
            </h2>
          );
        },
        code({ inline, className, children, ...props }: CodeProps) {
          if (inline) {
            return (
              <code
                className="bg-transparent px-1 rounded text-[#d6336c]"
                {...props}
              >
                {children}
              </code>
            );
          }
          return (
            <pre className="bg-gray-100 p-2 rounded overflow-auto mb-4">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          );
        },
        ul({ children, ...props }) {
          return (
            <ul className="list-disc pl-5 mb-4" {...props}>
              {children}
            </ul>
          );
        },
        ol({ children, ...props }) {
          return (
            <ol className="list-decimal pl-5 mb-4" {...props}>
              {children}
            </ol>
          );
        },
        li({ children, ...props }) {
          return (
            <li className="mb-1" {...props}>
              {children}
            </li>
          );
        },
        a({ children, ...props }) {
          return (
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {cleanedContent}
    </ReactMarkdown>
  );
}
