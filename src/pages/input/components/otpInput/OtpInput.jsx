import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import CodeBox from "@/components/codebox/CodeBox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import OtpInputField from "./OtpInputField";
import { otpFieldSchema } from "../../schema";

export default function OtpInput() {
  const form = useForm({
    resolver: zodResolver(otpFieldSchema),
    mode: "onChange",
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("입력된 값: " + data.otp);

    form.reset(); // 폼 초기화
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">OtpInput</h2>
        <div className="flex gap-4 flex-wrap">
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        control={form.control}
        name="otp"
        render={({ field, fieldState }) => (
            <OtpInputField 
              name="otp"
              label="인증번호 입력"
              placeholder="인증번호를 입력하세요"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              errorMessage={fieldState.error?.message}
            />
        )}
      />

      <div className="w-96 flex justify-end">
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
              "<InputOTP",
              "  maxLength={6}",
              "  value={field.value}",
              "  onChange={field.onChange}",
              ">",
              "  <InputOTPGroup>",
              "    {[0, 1, 2].map((i) => (",
              "      <InputOTPSlot key={i} index={i} />",
              "    ))}",
              "  </InputOTPGroup>",
              "  <InputOTPSeparator />",
              "  <InputOTPGroup>",
              "    {[3, 4, 5].map((i) => (",
              "      <InputOTPSlot key={i} index={i} />",
              "    ))}",
              "  </InputOTPGroup>",
              "</InputOTP>",
            ].join("\n")}
        />
      </section>
    </div>
  );
}
