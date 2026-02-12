import CodeBox from "@/components/codebox/CodeBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Accordion</h2>
        <div className="flex gap-4 flex-wrap">
          {/* Accordion 컴포넌트 미리보기 */}
          <Accordion
            type="single" //여러개를 열고 싶다면 multiple로 수정
            collapsible="true"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>첫번째 탭</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>첫번째 탭입니다.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>두번째 탭</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>두번째 탭입니다.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>세번째 탭</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>세번째 탭입니다.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Accordion",
            '  type="single" //여러개를 열고 싶다면 multiple로 수정',
            '  collapsible="true"',
            '  className="w-full"',
            ">",
            '  <AccordionItem value="item-1">',
            "    <AccordionTrigger>첫번째 탭</AccordionTrigger>",
            '    <AccordionContent className="flex flex-col gap-4 text-balance">',
            "      <p>첫번째 탭입니다.</p>",
            "    </AccordionContent>",
            "  </AccordionItem>",
            '  <AccordionItem value="item-2">',
            "    <AccordionTrigger>두번째 탭</AccordionTrigger>",
            '    <AccordionContent className="flex flex-col gap-4 text-balance">',
            "      <p>두번째 탭입니다.</p>",
            "    </AccordionContent>",
            "  </AccordionItem>",
            '  <AccordionItem value="item-3">',
            "    <AccordionTrigger>세번째 탭</AccordionTrigger>",
            '    <AccordionContent className="flex flex-col gap-4 text-balance">',
            "      <p>세번째 탭입니다.</p>",
            "    </AccordionContent>",
            "  </AccordionItem>",
            "</Accordion>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
