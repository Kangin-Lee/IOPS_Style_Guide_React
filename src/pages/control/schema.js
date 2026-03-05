import z from "zod";

export const radioGroupSchema = z.object({
  option: z.string().min(1, { message: "옵션을 선택해주세요." }),
});

export const singleSelectboxSchema = z.object({
  category: z.string().min(1, { message: "부서를 선택해주세요." }),
});

export const switchSchema = z.object({
  agree: z.boolean().refine((v) => v === true, {
    message: "동의가 필요합니다.",
  }),
});

export const multiSelectSchema = z.object({
  tagInput: z.string().min(1, { message: "빈 태그는 추가할 수 없습니다." }),
});