import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { textFieldSchema } from "../forms/text/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputField from "../forms/text/TextInputField";
import { Button } from "@/components/ui/button";

export default function TextInput() {
  const form = useForm({
    resolver: zodResolver(textFieldSchema),
    mode: "onSubmit",
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("입력된 값: " + data.text);

    form.reset(); // 폼 초기화
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Text Input</h2>
      <div className="flex gap-4">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex flex-col items-end">
          <Controller
            control={form.control}
            name="text"
            render={({ field, fieldState }) => (
              <TextInputField
                name="text"
                label="텍스트 입력"
                placeholder="텍스트를 입력하세요"
                // className="w-96"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                description="2자 이상 10자 이하로 입력해주세요."
                errorMessage={fieldState.error?.message}
              />
            )}
          />

          <div>
            <Button type="submit" disabled={!form.formState.isValid}>등록</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
