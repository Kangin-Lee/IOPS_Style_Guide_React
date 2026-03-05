import CodeBox from "@/components/codebox/CodeBox";
import CheckboxComponent from "./components/checkbox/CheckboxComponent";
import RadioGroupComponent from "./components/radioGroup/RadioGroupComponent";
import SwitchComponent from "./components/switch/SwitchComponent";
import ToggleComponent from "./components/toggle/ToggleComponent";
import SingleSelectboxComponent from "./components/selectbox/singleSelectbox/SingleSelectboxComponent";
import MultiSelectComponent from "./components/selectbox/multiSelectbox/MultiSelectboxComponent";

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
      <SingleSelectboxComponent />

            {/* Multi Selectbox Component */}
      <MultiSelectComponent />
        
      {/* Switch Component */}
      <SwitchComponent />

      {/* Toggle Component */}
      <ToggleComponent />
    </div>
  );
}
