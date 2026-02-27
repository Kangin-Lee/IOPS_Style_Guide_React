import CodeBox from "@/components/codebox/CodeBox";

export default function RowGrid() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Row Grid</h2>

        <section className="bg-amber-400 p-3">
          <p className="mb-2">className = 'grid grid-rows-8 gap-4'</p>
          <div className="flex gap-4 flex-wrap">
            <div className="grid grid-rows-8 gap-4">
              <div className="bg-red-300 row-span-2 p-4 text-center">
                row-span-2
              </div>
              <div className="bg-blue-300 row-span-3 p-4 text-center">
                row-span-3
              </div>
              <div className="bg-green-300 row-span-3 p-4 text-center">
                row-span-3
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            '<div className="grid grid-rows-8 gap-4">',
            '  <div className="bg-red-300 row-span-2 p-4 text-center">row-span-2</div>',
            '  <div className="bg-blue-300 row-span-3 p-4 text-center">row-span-3</div>',
            '  <div className="bg-green-300 row-span-3 p-4 text-center">row-span-3</div>',
            "</div>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
