import CodeBox from "@/components/codebox/CodeBox";
import AccordionComponent from "./components/Accordion";

export default function AccordionPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Accordion Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`npx shadcn@latest add accordion`}
        />
      </div>

      {/* Color Variants */}
      <AccordionComponent />
    </div>
  );
}