import CodeBox from "@/components/codebox/CodeBox";
import CalendarComponent from "./components/CalendarComponent";
import DatePickerComponent from "./components/DatePickerComponent";
import DateTimePickerComponent from "./components/DateTimePickerComponent";
import DateRangePickerComponent from "./components/DateRangePickerComponent";

export default function DatePickerPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Datepicker Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={[
            "//npm install",
            "npx shadcn@latest add calendar",
            "npm i date-fns",
          ].join("\n")}
        />
      </div>

      {/* Date Select */}
      <CalendarComponent />

      {/* Date Picker */}
      <DatePickerComponent />

      {/* Date Time Picker */}
      <DateTimePickerComponent />

      {/* Date Range Picker */}
      <DateRangePickerComponent />
    </div>
  );
}
