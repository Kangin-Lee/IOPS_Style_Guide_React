import BasicStructureGrid from "./components/BasicStructureGrid";
import ResponsiveGrid from "./components/ResponsiveGrid";
import RowGrid from "./components/RowGrid";

export default function GridPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Grid Examples</h1>

      {/* Basic Structure Grid Component */}
      <BasicStructureGrid />

      {/* Responsive Grid Component */}
      <ResponsiveGrid />

      {/* Row Grid Component */}
      <RowGrid />
    </div>
  );
}
