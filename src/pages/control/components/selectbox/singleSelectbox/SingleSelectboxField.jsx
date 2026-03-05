import { Controller } from "react-hook-form";
import { CircleAlert } from "lucide-react";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function SingleSelectboxField({
  control,
  name = "category",
  label = "카테고리 선택",
  placeholder = "카테고리를 선택해 주세요",
  items = [
    { value: "sd", label: "SD부" },
    { value: "ia", label: "AI부" },
    { value: "dp", label: "DP부" },
  ],
  triggerClassName = "w-[200px]",
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>

          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger id={name} className={triggerClassName} aria-invalid={fieldState.invalid}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
              {items.map((it) => (
                <SelectItem key={it.value} value={it.value}>
                  {it.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {fieldState.invalid && (
            <FieldError className="flex items-center gap-1">
              <CircleAlert size={14} />
              {fieldState.error?.message}
            </FieldError>
          )}
        </Field>
      )}
    />
  );
}