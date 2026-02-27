import CodeBox from "@/components/codebox/CodeBox";
import SingleFileUploadInput from "./SingleFileUploadInput";

export default function SingleFileUpload() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Single File Upload</h2>
        <div className="flex gap-4 flex-wrap">
          <SingleFileUploadInput />
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Input ref={inputRef} type='file' accept='.pdf,.hwp,.docx,.ppt' onChange={handleChange} />",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
