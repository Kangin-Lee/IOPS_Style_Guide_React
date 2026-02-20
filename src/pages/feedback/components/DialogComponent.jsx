import CodeBox from "@/components/codebox/CodeBox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Dialog & Modal</h2>
        <div className="flex gap-4 flex-wrap">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">버튼</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
              </div>
              <DialogFooter className="justify-start">
                <DialogClose asChild>
                  <Button variant="dark">닫기</Button>
                </DialogClose>
                <Button type="submit" variant="default">
                  등록
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Dialog>",
            "  <DialogTrigger asChild>",
            '    <Button variant="default">버튼</Button>',
            "  </DialogTrigger>",
            '  <DialogContent className="sm:max-w-md">',
            "    <DialogHeader>",
            "      <DialogTitle>Share link</DialogTitle>",
            "      <DialogDescription>",
            "        Anyone who has this link will be able to view this.",
            "      </DialogDescription>",
            "    </DialogHeader>",
            '    <div className="flex items-center gap-2">',
            '      <div className="grid flex-1 gap-2">',
            '        <Label htmlFor="link" className="sr-only">Link</Label>',
            "        <Input",
            '          id="link"',
            '          defaultValue="https://ui.shadcn.com/docs/installation"',
            "          readOnly",
            "        />",
            "      </div>",
            "    </div>",
            '    <DialogFooter className="sm:justify-start">',
            "      <DialogClose asChild>",
            '        <Button variant="dark">닫기</Button>',
            "      </DialogClose>",
            '      <Button type="submit" variant="default">등록</Button>',
            "    </DialogFooter>",
            "  </DialogContent>",
            "</Dialog>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
