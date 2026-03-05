import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import userData from "@/mock/user.json";

import { multiSelectSchema } from "@/pages/control/schema";
import { useMultiSelectStore } from "@/store/multiSelectStore";
import MultiSelectField from "./MultiSelectboxField";
import CodeBox from "@/components/codebox/CodeBox";

export default function MultiSelectComponent() {
  const form = useForm({
    resolver: zodResolver(multiSelectSchema),
    defaultValues: {
      tagInput: "",
    },
  });

  const [open, setOpen] = useState(false);

  const {
    options,
    selected,
    addSelected,
    removeSelected,
    setOptions,
    clearSelected,
  } = useMultiSelectStore();

  useEffect(() => {
    setOptions(userData);
  }, [setOptions]);

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">MultiSelectBox</h2>
        <form className="space-y-2" noValidate>
          <MultiSelectField
            control={form.control}
            form={form}
            open={open}
            setOpen={setOpen}
            options={options}
            selected={selected}
            addSelected={addSelected}
            removeSelected={removeSelected}
            clearSelected={clearSelected}
          />
        </form>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Popover open={open} onOpenChange={setOpen}>",
            "  <PopoverTrigger asChild>",
            '    <Button type="button">+ 태그 추가</Button>',
            "  </PopoverTrigger>",
            '  <div className="flex items-center">',
            "    <Button",
            '      type="button"',
            "      onClick={clearSelected}",
            '      variant="outlineDefault"',
            "    >",
            "      <CircleMinus />",
            "      선택 초기화",
            "    </Button>",
            "  </div>",
            '  <PopoverContent className="w-full p-0">',
            "    <Command>",
            "      <CommandInput",
            '        placeholder="태그 검색 또는 입력"',
            "        value={field.value}",
            "        onValueChange={field.onChange}",
            "        onKeyDown={(e) => {",
            '          if (e.key === "Enter") {',
            "            e.preventDefault();",
            "            handleAddCustom(field.value);",
            "          }",
            "        }}",
            "      />",
            "      <CommandList>",
            "        {options.filter((item) =>",
            "          item.invoice.toLowerCase().includes(field.value.toLowerCase())",
            "        ).length === 0 ? (",
            "          <CommandEmpty>",
            "            선택할 수 있는 태그가 없습니다.",
            "          </CommandEmpty>",
            "        ) : (",
            "          options",
            "            .filter(",
            "              (item) =>",
            "                item.invoice.toLowerCase().includes(field.value.toLowerCase()) &&",
            "                !selected.includes(item.invoice)",
            "            )",
            "            .map((item) => (",
            "              <CommandItem",
            "                key={item.id}",
            "                onSelect={() => handleSelect(item.invoice)}",
            "              >",
            "                {item.invoice}",
            "              </CommandItem>",
            "            ))",
            "        )}",
            "      </CommandList>",
            "    </Command>",
            "  </PopoverContent>",
            "</Popover>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
