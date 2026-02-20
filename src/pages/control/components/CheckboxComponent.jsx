import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldLabel,
  FieldContent,
} from "@/components/ui/field";
import { CircleAlert } from "lucide-react";

const schema = z.object({
  terms: z.boolean().refine((v) => v === true, {
    message: "약관에 동의하셔야 합니다.",
  }),
});

export default function CheckboxComponent() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { terms: false },
  });

  const onSubmit = () => {
    toast("약관에 동의하였습니다.");
    form.reset();
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Tabs</h2>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="terms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <Checkbox
                  id="terms"
                  checked={!!field.value}
                  onCheckedChange={(v) => field.onChange(!!v)}
                  aria-invalid={fieldState.invalid}
                />

                {/* 라벨/설명 세로 묶음 (옵션이지만 체크박스에 특히 잘 맞음) */}
                <FieldContent>
                  <FieldLabel htmlFor="terms" className="text-sm font-medium">
                    이용 약관에 동의합니다.
                  </FieldLabel>

                  {/* 에러는 invalid일 때만 노출 */}
                  {fieldState.error?.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                      <CircleAlert size={14} />
                      {fieldState.error.message}
                    </p>
                  )}
                </FieldContent>
              </Field>
            )}
          />

          <div className="w-96 flex justify-end">
            <Button type="submit">등록</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
