import CodeBox from "@/components/codebox/CodeBox";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function BreadcrumbComponent() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Breadcrumb Example</h2>
        <div className="flex gap-4 flex-wrap">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>

                {/* BreadcrumbLink 이동 가능한 링크(클릭하면 다른 페이지로 가는 항목)를 표현 */}
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>

                {/* BreadcrumbPage 현재 페이지(마지막 항목, active crumb) 를 표현 */}
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBox
          code={[
            "<Breadcrumb>",
            "  <BreadcrumbList>",
            "    <BreadcrumbItem>",
            "      <BreadcrumbLink asChild>",
            '        <Link to="/">Home</Link>',
            "      </BreadcrumbLink>",
            "    </BreadcrumbItem>",
            "    <BreadcrumbSeparator />",
            "    <BreadcrumbItem>",
            "      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>",
            "    </BreadcrumbItem>",
            "  </BreadcrumbList>",
            "</Breadcrumb>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
