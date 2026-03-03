import z from "zod";

//텍스트 인풋의 스카마 정의
export const textFieldSchema = z.object({
  text: z
    .string()
    .min(2, { message: "2자 이상 입력해주세요." })
    .max(10, { message: "10자 이하로 입력해주세요." }),
});

// 비밀번호 인풋의 스카마 정의
export const passwordFieldSchema = z.object({
  password: z
    .string()
    .min(8, "8자 이상이어야 합니다.")
    .regex(/[a-z]/, "소문자를 포함해야 합니다.")
    .regex(/[A-Z]/, "대문자를 포함해야 합니다.")
    .regex(/[0-9]/, "숫자를 포함해야 합니다.")
    .regex(/[^a-zA-Z0-9]/, "특수문자를 포함해야 합니다."),
});

// 이메일 인풋의 스카마 정의
export const emailFieldSchema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
});

// 숫자 인풋의 스카마 정의
export const numberFieldSchema = z.object({
  number: z
    .string()
    .trim()
    .min(1, "값을 입력해주세요.")
    .regex(/^\d+$/, "숫자만 입력 가능합니다."),
});


// 휴대폰 번호 인풋의 스카마 정의
export const phoneFieldSchema = z.object({
  phone: z.preprocess(
    (v) => (typeof v === "string" ? v.replace(/\D/g, "") : v), // 숫자만 남김(공백/하이픈 포함 제거)
    z
      .string()
      .min(1, "휴대폰 번호를 입력해주세요.")
      .regex(/^01[016789]\d{7,8}$/, "유효한 휴대폰 번호 양식을 입력해주세요.")
  ),
});


export const otpFieldSchema = z.object({
  otp: z
    .string()
    .min(6, "6자리를 모두 입력해주세요.")
    .max(6, "6자리를 모두 입력해주세요.")
    .regex(/^\d+$/, "숫자 6자리만 입력할 수 있습니다."),
});