import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import SwitchField from "./SwitchField";
import { switchSchema } from "../../schema";
import CodeBox from "@/components/codebox/CodeBox";

export default function SwitchComponent() {
  const form = useForm({
    resolver: zodResolver(switchSchema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = () => {
    toast("약관에 동의하였습니다.");
    form.reset(); // defaultValues로 복귀 (agree: false)
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Switch</h2>

        <div className="flex gap-4 flex-wrap">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <SwitchField control={form.control} />

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
            `<Switch checked={field.value} onCheckedChange={field.onChange} id="agree" />`,
          ].join("\n")}
        />
      </section>
    </div>
  );
}
