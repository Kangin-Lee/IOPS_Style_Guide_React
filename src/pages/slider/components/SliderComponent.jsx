import CodeBox from "@/components/codebox/CodeBox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderComponent() {
  // Slider의 값 상태 관리 (초기 값을 40으로 설정)
  const [value, setValue] = useState([40]);

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Slider</h2>
        <div className="flex gap-4 flex-wrap">
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
        <p className="text-sm mt-2">
          현재 값: <span className="font-medium">{value[0]}%</span>
        </p>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={["<Slider defaultValue={[40]} max={100} step={1} />"].join(
            "\n",
          )}
        />
      </section>
    </div>
  );
}
