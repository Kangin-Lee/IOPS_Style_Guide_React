import { Controller } from "react-hook-form";
import { CircleAlert } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "@/components/ui/field";

export default function SwitchField({
  control,
  name = "agree",
  label = "개인정보 수집 및 이용에 동의",
  description = "필수 항목입니다.",
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} orientation="horizontal">
          {/* 라벨/설명/에러 */}
          <FieldContent>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <FieldDescription className="text-xs">
              {description}
            </FieldDescription>

            {fieldState.error?.message && (
              <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <CircleAlert size={14} />
                {fieldState.error.message}
              </p>
            )}
          </FieldContent>

          {/* 스위치 */}
          <Switch
            id={name}
            checked={!!field.value}
            onCheckedChange={(v) => field.onChange(!!v)}
            aria-invalid={fieldState.invalid}
          />
        </Field>
      )}
    />
  );
}