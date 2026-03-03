import CodeBox from "@/components/codebox/CodeBox";
import TextInput from "./components/textInput/TextInput";
import PasswordInput from "./components/passwordInput/PasswordInput";
import EmailInput from "./components/emailInput/EmailInput";
import NumberInput from "./components/numberInput/NumberInput";
import PhoneInput from "./components/phoneInput/PhoneInput";
import OtpInput from "./components/otpInput/OtpInput";

export default function InputPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Input Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Input placeholder="텍스트를 입력하세요" className="w-96" />`}
        />
      </div>

        {/* Text Input */}
        <TextInput />

        {/* Password Input */}
        <PasswordInput />

        {/* Email Input */}
        <EmailInput />

        {/* Number Input */}
        <NumberInput />

        {/* Phone Input */}
        <PhoneInput />

        {/* Otp Input */}
        <OtpInput />
    </div>
  );
}
