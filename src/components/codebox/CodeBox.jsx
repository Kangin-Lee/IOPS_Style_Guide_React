import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// (선택) shadcn 버튼 쓰는 경우
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const customTheme = {
  ...vscDarkPlus,

  // ✅ 태그(<Button>, </Button>) 관련
  tag: { color: "#4FC1FF" },
  "tag-name": { color: "#4FC1FF" },

  // ✅ 속성명(variant, size, rounded)
  "attr-name": { color: "#FFD166" },

  // ✅ 속성값("secondary", "sm")
  "attr-value": { color: "#A6E22E" },

  // ✅ 괄호/등호/따옴표 같은 기호
  punctuation: { color: "#C8C8C8" },

  // (선택) JSX에서 컴포넌트 이름이 class-name으로 잡히는 경우도 있어서 보강
  "class-name": { color: "#4FC1FF" },
};

export default function CodeBox({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // 일부 환경에서 clipboard 권한 문제 있을 수 있음
      console.error(e);
    }
  };

  return (
    <div className="relative">
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={onCopy}
        className="absolute right-2 top-2 z-10"
      >
        {copied ? (
          <Check className="mr-1 h-2 w-2" />
        ) : (
          <Copy className="mr-1 h-2 w-2" />
        )}
        {copied ? "Copied" : "Copy"}
      </Button>

      <SyntaxHighlighter
        language={language}
        style={customTheme}
        wrapLongLines
        customStyle={{
          margin: 0,
          borderRadius: 12,
          padding: "16px 56px 16px 16px", // 버튼 자리 확보
          fontSize: 14,
          lineHeight: 1.6,
        }}
        codeTagProps={{
          style: {
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
