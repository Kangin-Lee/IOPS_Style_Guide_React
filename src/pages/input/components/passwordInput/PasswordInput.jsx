import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { passwordFieldSchema } from "../../schema";
import CodeBox from "@/components/codebox/CodeBox";
import { Button } from "@/components/ui/button";
import PasswordInputField from "./PasswordInputField";
import { toast } from "sonner";

export default function PasswordInput() {
  const form = useForm({
    resolver: zodResolver(passwordFieldSchema),
    mode: "onSubmit",
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("입력된 값: " + data.password);

    form.reset(); // 폼 초기화
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">PasswordInput</h2>
        <div className="flex gap-4 flex-wrap">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 flex flex-col items-end w-96"
          >
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <PasswordInputField
                  name="password"
                  label="비밀번호 입력"
                  placeholder="비밀번호를 입력하세요"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  description="8자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <div>
              <Button type="submit">
                등록
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            '<Input type="password" placeholder="비밀번호를 입력하세요" className="w-96" />',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
