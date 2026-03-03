import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import CodeBox from "@/components/codebox/CodeBox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import NumberInputField from "./NumberInputField";
import { numberFieldSchema } from "../../schema";

export default function NumberInput() {
  const form = useForm({
    resolver: zodResolver(numberFieldSchema),
    mode: "onSubmit",
    defaultValues: {
      number: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("입력된 값: " + data.number);

    form.reset(); // 폼 초기화
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">NumberInput</h2>
        <div className="flex gap-4 flex-wrap">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 flex flex-col items-end w-96"
          >
            <Controller
              name="number"
              control={form.control}
              render={({ field, fieldState }) => (
                <NumberInputField
                  name="number"
                  label="숫자 입력"
                  placeholder="숫자를 입력하세요"
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  description="숫자 형식으로 입력해주세요."
                  errorMessage={fieldState.error?.message}
                />
              )}
            />

            <div>
              <Button type="submit" disabled={!form.formState.isValid}>
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
            '<Input type="number" placeholder="숫자를 입력하세요" className="w-96" />',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
