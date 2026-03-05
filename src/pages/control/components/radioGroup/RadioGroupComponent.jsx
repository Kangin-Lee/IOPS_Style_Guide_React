import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import RadioGroupField from "./RadioGroupField";
import { radioGroupSchema } from "../../schema";
import CodeBox from "@/components/codebox/CodeBox";

export default function RadioGroupComponent() {
  const form = useForm({
    resolver: zodResolver(radioGroupSchema),
    defaultValues: {
      option: "option-one",
    },
  });

  const onSubmit = (data) => {
    toast(`선택한 값: ${data.option}`);
    form.reset();
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">RadioGroup</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <RadioGroupField control={form.control} />

          <div className="w-96 flex justify-end">
            <Button type="submit">등록</Button>
          </div>
        </form>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<RadioGroup",
            "  onValueChange={field.onChange}",
            "  defaultValue={field.value}",
            '  className="space-y-2"',
            ">",
            '  <div className="flex items-center space-x-2">',
            '    <RadioGroupItem value="option-one" id="option-one" />',
            '    <Label htmlFor="option-one">선택 1</Label>',
            "  </div>",
            '  <div className="flex items-center space-x-2">',
            '    <RadioGroupItem value="option-two" id="option-two" />',
            '    <Label htmlFor="option-two">선택 2</Label>',
            "  </div>",
            "</RadioGroup>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
