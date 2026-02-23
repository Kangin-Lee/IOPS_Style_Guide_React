import CodeBox from "@/components/codebox/CodeBox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Pagination</h2>
        <div className="flex gap-4 flex-wrap">
          {/* 페이지 개수는 커스텀해서 사용 */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive={true} href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Pagination>",
            "  <PaginationContent>",
            "    <PaginationItem>",
            '      <PaginationPrevious href="#" />',
            "    </PaginationItem>",
            "    <PaginationItem>",
            '      <PaginationLink isActive={true} href="#">',
            "        1",
            "      </PaginationLink>",
            "    </PaginationItem>",
            "    <PaginationItem>",
            '      <PaginationLink href="#">2</PaginationLink>',
            "    </PaginationItem>",
            "    <PaginationItem>",
            '      <PaginationLink href="#">3</PaginationLink>',
            "    </PaginationItem>",
            "    <PaginationItem>",
            "      <PaginationEllipsis />",
            "    </PaginationItem>",
            "    <PaginationItem>",
            '      <PaginationNext href="#" />',
            "    </PaginationItem>",
            "  </PaginationContent>",
            "</Pagination>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
