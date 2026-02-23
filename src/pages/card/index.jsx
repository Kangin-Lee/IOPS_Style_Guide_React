import CodeBox from "@/components/codebox/CodeBox";
import ContentCard from "./components/ContentCard";
import HeaderContentCard from "./components/HeaderContentCard";
import ContentFooterCard from "./components/ContentFooterCard";
import HeaderContentFooter from "./components/HeaderContentFooter";

export default function CardPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Card Examples</h1>
      <div className="w-fit">
        <CodeBox code={`<Card><CardContent>카드내용</CardContent></Card>`} />
      </div>

      {/* Content Card Component */}
      <ContentCard />

      {/* Header + Content Component */}
      <HeaderContentCard />

      {/* Content + Footer Component */}
      <ContentFooterCard />

      {/* Header + Content + Footer Component */}
      <HeaderContentFooter />
    </div>
  );
}
