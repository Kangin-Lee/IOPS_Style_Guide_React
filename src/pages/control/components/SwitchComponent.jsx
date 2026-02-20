import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "@/components/ui/field";

const schema = z.object({
  agree: z.boolean().refine((v) => v === true, {
    message: "동의가 필요합니다.",
  }),
});

export default function SwitchComponent() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = () => {
    toast("약관에 동의하였습니다.");
    form.reset();
  };

  return (
    <section className="bg-white p-4 w-fit">
      <h2 className="text-lg font-semibold mb-4">Switch</h2>
      <div className="flex gap-4 flex-wrap">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="agree"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                {/* 라벨/설명 */}
                <FieldContent>
                  <FieldLabel htmlFor="agree">
                    개인정보 수집 및 이용에 동의
                  </FieldLabel>
                  <FieldDescription className="text-xs">
                    필수 항목입니다.
                  </FieldDescription>

                  {/* 아이콘 포함 에러 */}
                  {fieldState.error?.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                      <CircleAlert size={14} />
                      {fieldState.error.message}
                    </p>
                  )}
                </FieldContent>

                {/* 스위치 */}
                <Switch
                  id="agree"
                  checked={!!field.value}
                  onCheckedChange={(v) => field.onChange(!!v)}
                  aria-invalid={fieldState.invalid}
                />
              </Field>
            )}
          />

          <div className="w-96 flex justify-end">
            <Button type="submit">등록</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
