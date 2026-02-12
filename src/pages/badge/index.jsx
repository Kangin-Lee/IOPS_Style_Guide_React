import CodeBox from "@/components/codebox/CodeBox";
import ColorBadge from "./components/ColorBadge";

export default function BadgePage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Badge Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Button variant="default">primary</Button>`}
        />
      </div>

      {/* Color Variants */}
      <ColorBadge />
    </div>
  );
}