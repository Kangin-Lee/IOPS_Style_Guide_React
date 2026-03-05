import CodeBox from "@/components/codebox/CodeBox";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Toggle</h2>
        <Toggle>Toggle</Toggle>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox code={["<Toggle>Toggle</Toggle>"].join("\n")} />
      </section>
    </div>
  );
}
