import CodeBox from "@/components/codebox/CodeBox";
import TextareaComponent from "./components/TextareaComponent";

export default function TextareaPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Textarea Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Textarea placeholder="메시지를 입력하세요" className="w-96 h-32 resize-none" />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      {/* Textarea Component */}
      <TextareaComponent />
    </div>
  );
}
