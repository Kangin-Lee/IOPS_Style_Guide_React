import CodeBox from "@/components/codebox/CodeBox";
import { Badge } from "@/components/ui/badge";

export default function ColorBadge() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Color Badge</h2>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="dark">dark</Badge>
          <Badge variant="blueGray">blueGray</Badge>
          <Badge variant="info">info</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            '<Badge variant="default">Default</Badge>',
            '<Badge variant="secondary">Secondary</Badge>',
            '<Badge variant="success">Success</Badge>',
            '<Badge variant="warning">Warning</Badge>',
            '<Badge variant="dark">dark</Badge>',
            '<Badge variant="blueGray">blueGray</Badge>',
            '<Badge variant="info">info</Badge>',
            '<Badge variant="link">Link</Badge>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}