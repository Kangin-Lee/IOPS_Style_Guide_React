import CodeBox from "@/components/codebox/CodeBox";
import FontName from "./components/FontName";
import { TextSize } from "./components/FontSize";
import { TextWeigth } from "./components/TextWeigth";

export default function TextPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Text Examples</h1>
      <div className="w-96">
        <CodeBox
          code={[
            "//pretendard download",
            "https://noonnu.cc/font_page/694",
          ].join("\n")}
        />
      </div>

      {/* Font */}
      <FontName />

      {/* Text Size */}
      <TextSize />

      {/* Text Weight */}
      <TextWeigth />
    </div>
  );
}