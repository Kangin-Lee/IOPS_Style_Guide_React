//텍스트 인풋의 스카마 정의

import z from "zod";

export const textFieldSchema = z.object({
  text: z
    .string()
    .min(2, { message: "2자 이상 입력해주세요." })
    .max(10, { message: "10자 이하로 입력해주세요." }),
});