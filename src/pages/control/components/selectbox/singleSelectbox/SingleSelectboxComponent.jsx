import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import SingleSelectboxField from "./SingleSelectboxField";
import { singleSelectboxSchema } from "@/pages/control/schema";
import CodeBox from "@/components/codebox/CodeBox";

export default function SingleSelectboxComponent() {
  const form = useForm({
    resolver: zodResolver(singleSelectboxSchema),
    defaultValues: {
      category: "", // 기본 선택 없음
    },
  });

  const onSubmit = (data) => {
    toast(`선택된 카테고리: ${data.category}`);
    form.reset(); // defaultValues로 복귀
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">SingleSelectBox</h2>

        <div className="flex gap-4 flex-wrap">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <SingleSelectboxField control={form.control} />

            <div className="w-96 flex justify-end">
              <Button type="submit">등록</Button>
            </div>
          </form>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Select value={field.value} onValueChange={field.onChange}>",
            '  <SelectTrigger className="w-[200px]">',
            '    <SelectValue placeholder="선택하세요" />',
            "  </SelectTrigger>",
            "  <SelectContent>",
            '    <SelectItem value="sd">SD부</SelectItem>',
            '    <SelectItem value="ia">AI부</SelectItem>',
            '    <SelectItem value="dp">DP부</SelectItem>',
            "  </SelectContent>",
            "</Select>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
