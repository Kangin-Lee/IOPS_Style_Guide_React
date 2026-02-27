import {z} from "zod";

export const textareaSchema = z.object({
  message: z.string().min(10, { message: "10자 이상 입력해주세요." }),
});