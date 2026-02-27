import CodeBox from "@/components/codebox/CodeBox";
import TextareaFieldForm from "./TextareaFieldForm";

export default function TextareaComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">TextAreaInput</h2>
        <div className="flex gap-4 flex-wrap">
          <TextareaFieldForm />
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            '<Textarea placeholder="메시지를 입력하세요" className="w-96 h-32 resize-none" />',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
