import CodeBox from "@/components/codebox/CodeBox";
import AreaChartComponent from "./components/AreaChart";
import RadarChartComponent from "./components/RadarChart";
import LineChartComponent from "./components/LineChart";
import BarChartComponent from "./components/BarChart";
import LineBarAreaChartComponent from "./components/LineBarAreaChart";
import PieChartComponent from "./components/PieChart";

export default function ChartsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Charts Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<LineChart width={400} height={400} data={data}><Line type="monotone" dataKey="uv" stroke="#c1c1c1"/></LineChart>`}
        />
      </div>

      {/* Line Chart Component */}
      <LineChartComponent />

      {/* Area Chart Component */}
      <AreaChartComponent />

      {/* Bar Chart Component */}
      <BarChartComponent />

      {/* Line + Bar + Area Chart Component */}
      <LineBarAreaChartComponent />

      {/* Pie Chart Component */}
      <PieChartComponent />

      {/* Radar Chart Component */}
      <RadarChartComponent />
    </div>
  );
}
