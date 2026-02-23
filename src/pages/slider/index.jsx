import CodeBox from "@/components/codebox/CodeBox";
import SliderComponent from "./components/SliderComponent";

export default function SliderPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Slider Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Slider defaultValue={[40]} max={100} step={1} />`}
        />
      </div>

      {/* Slider Component */}
      <SliderComponent />
    </div>
  );
}
