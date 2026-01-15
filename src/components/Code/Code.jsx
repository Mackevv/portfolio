import { useState } from "react";
import "./Code.css"

// Extract code text from rehype light html formatting
function extractText(node) {
  if (node === null || node === undefined) return ""

  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("")
  }

  if (typeof node === "object" && node.props?.children) {
    return extractText(node.props.children)
  }

  return ""
}

export default function Code({ 
  inline, 
  className,
  children, 
  lineNumbers = false
  , ...props 
}) {
  const [copied, setCopied] = useState(false);

  const code = extractText(children).replace(/\n$/, "");

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (inline) {
    return (
      <code className="inline-code" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="code">
      <button
        className="code__copy-button"
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className={className}>
        <code className={`${lineNumbers ? "show-line-number" : ""}`}>
          {children}
        </code> 
      </pre>
    </div>
  );
}
