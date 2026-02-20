import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function TextInputField({
  name,
  label,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  description,
  errorMessage,
}) {
  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!errorMessage}
        aria-describedby={
          description || errorMessage ? `${name}-help` : undefined
        }
      />

      {errorMessage && <FieldError id={`${name}-error`}>{errorMessage}</FieldError>}
    </Field>
  );
}
