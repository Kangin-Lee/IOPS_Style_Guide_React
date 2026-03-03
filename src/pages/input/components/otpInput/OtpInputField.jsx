import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OtpInputField({
  name,
  label,
  value,
  onChange,
  onBlur,
  description,
  errorMessage,
}) {
  const describedBy = errorMessage
    ? `${name}-error`
    : description
      ? `${name}-help`
      : undefined;

  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      <InputOTP
        id={name}
        maxLength={6}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!errorMessage}
        aria-describedby={describedBy}
      >
        <InputOTPGroup>
          {[0, 1, 2].map((i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>

        <InputOTPSeparator />

        <InputOTPGroup>
          {[3, 4, 5].map((i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>

      {description && !errorMessage && (
        <p id={`${name}-help`} className="text-sm text-muted-foreground mt-1">
          {description}
        </p>
      )}

      {errorMessage && (
        <FieldError id={`${name}-error`}>{errorMessage}</FieldError>
      )}
    </Field>
  );
}