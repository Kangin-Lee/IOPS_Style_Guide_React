// 버튼 페이지 컴포넌트

import CodeBox from "../../components/codebox/CodeBox";
import { ColorButton } from "./components/ColorButton";
import { IconButton } from "./components/IconButton";
import { LineColorButton } from "./components/LineColorButton";
import { RoundedButton } from "./components/RoundedButton";
import { SizeButton } from "./components/SizeButton";

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Button Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Button variant="secondary" size="sm" rounded="md">Default</Button>`}
        />
      </div>

      {/* Color Variants */}
      <ColorButton />

      {/* Line Variants */}
      <LineColorButton />

      {/* Size Variants */}
      <SizeButton />

      {/* Icon Buttons */}
      <IconButton />

      {/* Outline + Rounded Buttons */}
      <RoundedButton />
    </div>
  );
}
