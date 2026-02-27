import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import clsx from "clsx";
import { Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";

// ✅ 프로젝트에 있는 Field 경로에 맞춰 사용
import { Field } from "@/components/ui/field";

const schema = z.object({
  files: z
    .array(z.instanceof(File))
    .nonempty({ message: "최소 하나 이상의 파일을 선택하세요." })
    .refine(
      (files) =>
        files.every((file) =>
          ["pdf", "hwp", "docx", "ppt"].includes(
            (file.name.split(".").pop() || "").toLowerCase(),
          ),
        ),
      {
        message: "pdf, hwp, docx, ppt 형식의 파일만 업로드할 수 있습니다.",
      },
    )
    .refine((files) => files.every((file) => file.size <= 10 * 1024 * 1024), {
      message: "모든 파일은 10MB 이하만 업로드할 수 있습니다.",
    }),
});

export default function MultipleFileUploadInput() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { files: [] },
  });

  const onSubmit = (data) => {
    console.log("제출된 파일:", data.files);
    toast.success(`파일 ${data.files.length}개 업로드 준비 완료`);
  };

  const onInvalid = async () => {
    // ✅ submit 시 검증 결과가 확실히 반영되도록 강제 트리거
    await form.trigger("files");
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit, onInvalid)}
      className="space-y-4 w-[420px]"
    >
      <Controller
        control={form.control}
        name="files"
        render={({ field, fieldState }) => {
          // field.value를 source of truth로 쓰되, UI용 selectedFiles도 같이 유지
          const currentFiles = Array.isArray(field.value) ? field.value : [];

          const syncFiles = (nextFiles) => {
            setSelectedFiles(nextFiles);
            field.onChange(nextFiles);
          };

          const updateFileList = (newFiles) => {
            // 중복 제거: 이름+사이즈 기준
            const deduped = newFiles.filter(
              (file) =>
                !currentFiles.some(
                  (f) => f.name === file.name && f.size === file.size,
                ),
            );
            const updated = [...currentFiles, ...deduped];
            syncFiles(updated);
          };

          const handleInputChange = (e) => {
            const files = Array.from(e.target.files || []);
            updateFileList(files);
            e.target.value = "";
          };

          const handleDrop = (e) => {
            e.preventDefault();
            setIsDragging(false);
            const files = Array.from(e.dataTransfer.files || []);
            updateFileList(files);
          };

          const handleRemove = (index) => {
            const updated = currentFiles.filter((_, i) => i !== index);
            syncFiles(updated);
          };

          return (
            <Field
              label="파일 업로드 (드래그 앤 드롭 가능)"
              error={fieldState.error?.message}
            >
              {/* 드래그 앤 드롭 영역 */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                className={clsx(
                  "border border-dashed border-[var(--color-border)] rounded-md p-6 text-center transition-colors cursor-pointer",
                  isDragging ? "bg-blue-50 border-blue-400" : "bg-white",
                )}
              >
                <p className="text-[var(--color-font-gray)] text-sm flex flex-col items-center">
                  <Upload className="border rounded-full p-2" size={38} />
                  <span className="mt-2">
                    파일을 이곳에 드래그하거나&nbsp;
                    <span className="underline">클릭</span>하여 선택하세요
                  </span>
                </p>

                {/* 숨겨진 input */}
                <Input
                  ref={inputRef}
                  type="file"
                  multiple
                  accept=".pdf,.hwp,.docx,.ppt"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </div>

              {/* 선택된 파일 목록 */}
              {currentFiles.length > 0 && (
                <ul className="mt-2 text-sm">
                  {currentFiles.map((file, index) => (
                    <li
                      key={`${file.name}-${file.size}-${index}`}
                      className="flex justify-between items-center text-sm text-gray-700 mt-2 hover:underline hover:cursor-pointer"
                    >
                      <span className="truncate">{file.name}</span>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemove(index)}
                      >
                        <X />
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              {fieldState.error?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </Field>
          );
        }}
      />

      <Button type="submit">업로드</Button>
    </form>
  );
}
