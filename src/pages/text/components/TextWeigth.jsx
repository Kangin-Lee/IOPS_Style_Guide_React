import CodeBox from "@/components/codebox/CodeBox";

export function TextWeigth() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Text Weight</h2>
        <div className="flex gap-6 flex-wrap text-lg items-end text-center">
          <div>
            <p className="font-thin">프리탠다드 폰트입니다.</p>
            <p>font-thin</p>
          </div>

          <div>
            <p className="font-extralight">프리탠다드 폰트입니다.</p>
            <p>font-extralight</p>
          </div>

          <div>
            <p className="font-light">프리탠다드 폰트입니다.</p>
            <p>font-light</p>
          </div>

          <div>
            <p className="font-normal">프리탠다드 폰트입니다.</p>
            <p>font-normal</p>
          </div>

          <div>
            <p className="font-medium">프리탠다드 폰트입니다.</p>
            <p>font-medium</p>
          </div>

          <div>
            <p className="font-semibold">프리탠다드 폰트입니다.</p>
            <p>font-semibold</p>
          </div>

          <div>
            <p className="font-bold">프리탠다드 폰트입니다.</p>
            <p>font-bold</p>
          </div>

          <div>
            <p className="font-extrabold">프리탠다드 폰트입니다.</p>
            <p>font-extrabold</p>
          </div>

          <div>
            <p className="font-black">프리탠다드 폰트입니다.</p>
            <p>font-black</p>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<p className='font-thin'>프리탠다드 폰트입니다.</p>",
            "<p className='font-extralight'>프리탠다드 폰트입니다.</p>",
            "<p className='font-light'>프리탠다드 폰트입니다.</p>",
            "<p className='font-normal'>프리탠다드 폰트입니다.</p>",
            "<p className='font-medium'>프리탠다드 폰트입니다.</p>",
            "<p className='font-semibold'>프리탠다드 폰트입니다.</p>",
            "<p className='font-bold'>프리탠다드 폰트입니다.</p>",
            "<p className='font-extrabold'>프리탠다드 폰트입니다.</p>",
            "<p className='font-black'>프리탠다드 폰트입니다.</p>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
