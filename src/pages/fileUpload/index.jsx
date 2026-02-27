import CodeBox from "@/components/codebox/CodeBox";
import SingleFileUpload from "./components/singleFileUpload/SingleFileUpload";
import MultipleFileUpload from "./components/MultipleFileUpload/MultipleFileUpload";

export default function FileUploadPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">FileUpload Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Input type='file' accept='.pdf,.hwp,.docx,.ppt'  />`}
        />
      </div>

      {/* Single File Upload Component */}
      <SingleFileUpload />

      {/* Multiple File Upload Component */}
      <MultipleFileUpload />
    </div>
  );
}
