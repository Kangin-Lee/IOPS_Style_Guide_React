// /src/features/message/TextAreaMessageField.jsx
import { Controller } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { CircleAlert } from "lucide-react";

export default function TextAreaField({
  control,
  name = "message",
  id = "text-area-field-message",
  label = "메시지 입력",
  placeholder = "메시지를 입력하세요",
  className = "w-96 h-32 resize-none",
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>

          <Textarea
            {...field}
            id={id}
            placeholder={placeholder}
            className={className}
            aria-invalid={fieldState.invalid}
          />

          {fieldState.error && (
            <FieldError>
              <span className="flex items-center gap-1">
                <CircleAlert size={14} />
                {fieldState.error.message}
              </span>
            </FieldError>
          )}
        </Field>
      )}
    />
  );
}