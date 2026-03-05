import { Controller } from "react-hook-form";
import { CircleAlert } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function RadioGroupField({
  control,
  name = "option",
  label = "옵션 선택",
  options = [
    { value: "option-one", label: "선택 1" },
    { value: "option-two", label: "선택 2" },
  ],
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>

          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="space-y-2"
            id={name}
            aria-invalid={fieldState.invalid}
          >
            {options.map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={opt.value} />
                <Label htmlFor={opt.value}>{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>

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