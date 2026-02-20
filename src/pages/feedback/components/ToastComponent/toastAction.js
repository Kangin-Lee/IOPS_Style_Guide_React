import { toast } from "sonner";
import { AlertTriangle, Ban, CircleCheck } from "lucide-react";
import React from "react";

  export const openCommonSonner = () => {
    toast("기본 토스트");
  };

export const openSuccessSonner = () => {
  toast("성공적으로 저장되었습니다.", {
    icon: React.createElement(CircleCheck, {
      className: "text-[var(--color-success)]",
    }),
  });
};

export const openErrorSonner = () => {
  toast("입력값을 다시 한 번 확인해 주세요.", {
    icon: React.createElement(Ban, {
      className: "text-[var(--color-warning)]",
    }),
  });
};

export const openWarningSonner = () => {
  toast("입력값을 다시 한 번 확인해 주세요.", {
    icon: React.createElement(AlertTriangle, {
      className: "text-yellow-500",
    }),
  });
};

  export const openInfoSonner = () => {
    toast.info("새 버전이 업데이트 되었습니다.");
  };

  export const openDurationSonner = () => {
    toast("5초 뒤에 사라집니다.", {
      duration: 5000, // 5초
    });
  };

  export const openCancelSonner = () => {
    toast("변경사항이 저장되지 않았습니다.", {
      cancel: {
        label: "취소",
        onClick: () => console.log("취소 클릭"),
      },
    });
  };

  export const openDescriptionSonner = () => {
    toast.success("회원가입 완료", {
      description: "환영합니다! 로그인하여 시작하세요.",
    });
  };

  export const openActionSonner = () => {
    toast("작업이 완료되지 않았습니다.", {
      action: {
        label: "재시도",
        onClick: () => console.log("재시도 클릭"),
      },
    });
  };