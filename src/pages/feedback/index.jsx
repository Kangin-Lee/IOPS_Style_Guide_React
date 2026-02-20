import CodeBox from "@/components/codebox/CodeBox";
import AlertComponent from "./components/AlertComponent";
import DialogComponent from "./components/DialogComponent";
import PopoverComponent from "./components/PopoverComponent";
import TooltipComponent from "./components/TooltipComponent";
import ToastComponent from "./components/ToastComponent/ToastComponent";

export default function FeedbackPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Feedback Examples</h1>
      <div className="w-fit">
        <CodeBox
          code={`<Tooltip><TooltipContent><p>Add to library</p></TooltipContent></Tooltip>`}
        />
      </div>

      {/* Alert Component */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Alert</h2>
        <div className="flex gap-4 flex-wrap">
          <AlertComponent />
        </div>
        <p className="mt-3 text-sm text-red-500">
          * Alert 컴포넌트는 "클릭해서 뜨는 알림 UI"가 아니라, "페이지 상의 상태
          메시지용 정적(Static) 컴포넌트" 입니다. 버튼을 눌러서 뜨는 알림은
          Alert이 아니라 Toast나 Dialog를 사용해 주세요.
        </p>
      </section>

      {/* Dialog & Modal Component */}
      <DialogComponent />

      {/* Popover Component */}
      <PopoverComponent />

      {/* Tooltip Component */}
      <TooltipComponent />

      {/* Toast & Sonner Component */}
      <ToastComponent />
    </div>
  );
}
