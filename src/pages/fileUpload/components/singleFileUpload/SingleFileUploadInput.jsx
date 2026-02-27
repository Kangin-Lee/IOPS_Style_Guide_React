import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import clsx from "clsx";
import { Upload, X } from "lucide-react";

import { Field } from "@/components/ui/field";

const schema = z
  .object({
    file: z.any().optional(),
  })
  .superRefine((data, ctx) => {
    const file = data.file?.[0];
    if (!file) return;

    const allowed = ["pdf", "hwp", "docx", "ppt"];
    const ext = file.name.split(".").pop()?.toLowerCase();
    const maxSize = 10 * 1024 * 1024;

    if (!allowed.includes(ext)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["file"],
        message: "pdf, hwp, docx, ppt 파일만 업로드할 수 있습니다.",
      });
    }

    if (file.size > maxSize) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["file"],
        message: "파일 크기는 10MB 이하여야 합니다.",
      });
    }
  });

export default function SingleFileUploadInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { file: undefined },
  });

  const onSubmit = (data) => {
    const file = data.file?.[0];
    if (file) toast.success(`선택한 파일: ${file.name}`);
    else toast.info("파일이 선택되지 않았습니다.");
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[420px]">
      <Controller
        control={form.control}
        name="file"
        render={({ field, fieldState }) => (
          <Field label="파일 업로드 (드로그 앤 드롭 가능)" error={fieldState.error?.message}>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);

                const file = e.dataTransfer.files?.[0];
                if (!file) return;

                setSelectedFile(file);
                field.onChange([file]);
              }}
              onClick={() => inputRef.current?.click()}
              className={clsx(
                "border border-dashed border-[var(--color-border)] rounded-md p-6 text-center transition-colors cursor-pointer",
                isDragging ? "bg-blue-50 border-blue-400" : "bg-white"
              )}
            >
              <p className="text-[var(--color-font-gray)] text-sm flex flex-col items-center">
                <Upload className="border rounded-full p-2" size={38} />
                <span className="mt-2">
                  파일을 이곳에 드래그하거나&nbsp;
                  <span className="underline">클릭</span>하여 선택하세요
                </span>
              </p>

              <Input
                ref={inputRef}
                type="file"
                accept=".pdf,.hwp,.docx,.ppt"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setSelectedFile(file);
                  field.onChange([file]);
                  e.target.value = "";
                }}
                className="hidden"
              />
            </div>

            {selectedFile && (
              <div className="flex justify-between items-center text-sm text-gray-700 mt-2 hover:underline hover:cursor-pointer">
                <span>{selectedFile.name}</span>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setSelectedFile(null);
                    field.onChange(undefined);
                  }}
                >
                  <X />
                </Button>
              </div>
            )}
          </Field>
        )}
      />

      <Button type="submit">업로드</Button>
    </form>
  );
}