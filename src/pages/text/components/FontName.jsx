import CodeBox from "@/components/codebox/CodeBox";

export default function FontName() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Font</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-6 flex-wrap text-lg">
            <p>프리탠다드 폰트입니다.</p>
            <p>It's a pretandard font.</p>
            <p className="font-bold">프리탠다드 폰트입니다.</p>
            <p className="font-bold">It's a pretandard font.</p>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<p>프리탠다드 폰트입니다.</p>",
            "<p>It's a pretandard font.</p>",
            '<p className="font-bold">프리탠다드 폰트입니다.</p>',
            '<p className="font-bold">It\'s a pretandard font.</p>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
