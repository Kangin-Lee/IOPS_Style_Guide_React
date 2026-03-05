import { Controller } from "react-hook-form";
import { X, CircleAlert, CircleMinus } from "lucide-react";

import {
  Command,
  CommandItem,
  CommandInput,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function MultiSelectField({
  control,
  form, // setError / setValue / clearErrors / formState 접근용
  open,
  setOpen,
  options,
  selected,
  addSelected,
  removeSelected,
  clearSelected,
}) {
  const handleSelect = (item) => {
    addSelected(item);
    form.setValue("tagInput", "");
  };

  const handleAddCustom = (inputValue) => {
    // 빈 값 방지 (zod 메시지와 동일하게)
    if (!inputValue || inputValue.trim().length === 0) {
      form.setError("tagInput", { message: "빈 태그는 추가할 수 없습니다." });
      return;
    }

    const existsInOptions = options.some((opt) => opt.invoice === inputValue);
    if (!existsInOptions) {
      form.setError("tagInput", {
        message: `"${inputValue}" 는 유효한 태그가 아닙니다.`,
      });
      return;
    }

    addSelected(inputValue);
    form.setValue("tagInput", "");
    form.clearErrors("tagInput");
  };

  return (
    <div className="space-y-2">
      <Label>선택한 항목</Label>

      <div className="flex flex-wrap gap-2">
        {selected.map((tag) => (
          <span
            key={tag}
            className="flex items-center px-2 py-1 border border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded text-sm hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition"
          >
            {tag}
            <X
              className="ml-1 h-4 w-4 cursor-pointer"
              onClick={() => removeSelected(tag)}
            />
          </span>
        ))}
      </div>

      <Controller
        name="tagInput"
        control={control}
        render={({ field, fieldState }) => {
          const filtered = options.filter((item) =>
            item.invoice.toLowerCase().includes((field.value ?? "").toLowerCase())
          );

          const selectable = filtered.filter(
            (item) => !selected.includes(item.invoice)
          );

          return (
            <Field data-invalid={fieldState.invalid}>
              {/* 라벨은 “입력 필드(태그 추가)”용으로 */}
              <FieldLabel htmlFor="tagInput">태그 추가</FieldLabel>

              <div className="flex items-center gap-2">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button type="button">+ 태그 추가</Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput
                        id="tagInput"
                        placeholder="태그 검색 또는 입력"
                        value={field.value}
                        onValueChange={(v) => {
                          field.onChange(v);
                          if (fieldState.invalid) form.clearErrors("tagInput");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddCustom(field.value);
                          }
                        }}
                        aria-invalid={fieldState.invalid}
                      />

                      <CommandList>
                        {selectable.length === 0 ? (
                          <CommandEmpty>선택할 수 있는 태그가 없습니다.</CommandEmpty>
                        ) : (
                          selectable.map((item) => (
                            <CommandItem
                              key={item.id}
                              onSelect={() => handleSelect(item.invoice)}
                            >
                              {item.invoice}
                            </CommandItem>
                          ))
                        )}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Button
                  type="button"
                  onClick={clearSelected}
                  variant="outlineDefault"
                >
                  <CircleMinus />
                  선택 초기화
                </Button>
              </div>

              {(fieldState.error?.message || form.formState.errors.tagInput?.message) && (
                <FieldError className="flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {fieldState.error?.message || form.formState.errors.tagInput?.message}
                </FieldError>
              )}
            </Field>
          );
        }}
      />
    </div>
  );
}