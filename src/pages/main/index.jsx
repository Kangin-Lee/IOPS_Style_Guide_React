// 루트 메인 페이지 컴포넌트

import { Input } from "@/components/ui/input";
import MainMenuList from "./components/MainMenuList";
import { useState } from "react";
import { mainMenuRoutes } from "@/routes/mainMenuRoutes";

export default function MainPage() {
  const [searchCom, setSearchCom] = useState("");

  const filteredComponents = mainMenuRoutes.filter((route) => {
    return route.title.toLowerCase().includes(searchCom.toLowerCase());
  }); 

  return (
    <div className="flex-1 xs:p-4 sm:p-4 md:p-8 md:px-16" style={{ minHeight: "calc(100vh - 70px - 32px)" }}>
      <div>
        <h1 className="lg:text-5xl font-black text-4xl">COMPONENTS</h1>
        <p className="text-[var(--color-font-gray)] lg:w-2xl my-5 xs:text-sm lg:text-base">
          컴포넌트는 각 기능을 구성하는 요소들의 조합입니다. 컴포넌트 스타일
          가이드라인은 관련 부서 간의 원활한 소통을 위해 컴포넌트의 명칭을
          통일하고 구조, 용도, 종류, 패턴을 정의하는 것을 목적으로 합니다.
        </p>
        <hr className="mb-6" />
      </div>

      {/* 검색바 자리 */}
      <div className="flex justify-end">
        <Input
          type="text"
          placeholder="필요한 컴포넌트를 입력해 주세요."
          className="w-sm mb-7 bg-white"
          value={searchCom}
          onChange={(e) => setSearchCom(e.target.value)}
        />
      </div>

      {/* 컴포넌트 리스트 뿌려주는 곳 */}
      <div>
        <MainMenuList filteredComponents={filteredComponents} />
      </div>
    </div>
  );
}
