//📌 LineColorButton 컴포넌트

import { Button } from "@/components/ui/button";
import CodeBox from "../../../components/codebox/CodeBox";

export function LineColorButton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Line Color Button</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="outlineDefault">outlineDefault</Button>
          <Button variant="outlineSecondary">outlineSecondary</Button>
          <Button variant="outlineSuccess">outlineSuccess</Button>
          <Button variant="outlineWarning">outlineWarning</Button>
          <Button variant="outlineDark">outlineDark</Button>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            '<Button variant="outlineDefault">outlineDefault</Button>',
            '<Button variant="outlineSecondary">outlineSecondary</Button>',
            '<Button variant="outlineSuccess">outlineSuccess</Button>',
            '<Button variant="outlineWarning">outlineWarning</Button>',
            '<Button variant="outlineDark">outlineDark</Button>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
