//📌 RoundedButton 컴포넌트

import { Button } from "@/components/ui/button";
import CodeBox from "../../../components/codebox/CodeBox";

export function RoundedButton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Rounded Button</h2>
        <div className="flex gap-4 flex-wrap">
          <Button rounded="none">None</Button>
          <Button rounded="sm">Small</Button>
          <Button rounded="md">Medium</Button>
          <Button rounded="lg">Large</Button>
          <Button rounded="full">Full</Button>
        </div>
      </section>

      {/* Code 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            '<Button rounded="none">None</Button>',
            '<Button rounded="sm">Small</Button>',
            '<Button rounded="md">Medium</Button>',
            '<Button rounded="lg">Large</Button>',
            '<Button rounded="full">Full</Button>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
