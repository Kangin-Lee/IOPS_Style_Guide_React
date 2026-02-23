import CodeBox from "@/components/codebox/CodeBox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";

export default function HeaderContentCard() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Header + Content Card</h2>
        <div className="flex gap-4 flex-wrap">
          <Card>
            <CardHeader>
              <Badge size={20} />
              <CardTitle>카드 제목</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p>카드 본문에 들어갈 내용을 작성하세요.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Card>",
            "  <CardHeader>",
            "    <Badge size={20} />",
            "    <CardTitle>카드 제목</CardTitle>",
            "  </CardHeader>",
            '  <CardContent className="p-6">',
            "    <p>카드 본문에 들어갈 내용을 작성하세요.</p>",
            "  </CardContent>",
            "</Card>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
