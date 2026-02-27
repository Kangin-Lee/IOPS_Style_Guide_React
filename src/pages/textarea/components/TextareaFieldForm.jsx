import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { textareaSchema } from "../schema";
import TextAreaField from "./TextareaField";

export default function TextareaFieldForm() {
  const form = useForm({
    resolver: zodResolver(textareaSchema),
    defaultValues: { message: "" },
  });

  const onSubmit = (data) => {
    toast(`입력된 내용: ${data.message}`);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2" noValidate>
      <TextAreaField control={form.control} />

      <div className="w-96 flex justify-end">
        <Button type="submit">등록</Button>
      </div>
    </form>
  );
}