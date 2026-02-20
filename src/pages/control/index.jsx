import CodeBox from "@/components/codebox/CodeBox";
import CheckboxComponent from "./components/CheckboxComponent";
import RadioGroupComponent from "./components/RadioGroupComponent";
import SelectboxComponent from "./components/SelectboxComponent";
import ToggleComponent from "./components/ToggleComponent";
import SwitchComponent from "./components/SwitchComponent";

export default function ControlPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Control Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Tooltip><TooltipContent><p>Add to library</p></TooltipContent></Tooltip>`}
        />
      </div>

      {/* Checkbox Component */}
      <CheckboxComponent />

      {/* RadioGroup Component */}
      <RadioGroupComponent />

      {/* Selectbox Component */}
      <SelectboxComponent />
        
      {/* Switch Component */}
      <SwitchComponent />

      {/* Toggle Component */}
      <ToggleComponent />
    </div>
  );
}
