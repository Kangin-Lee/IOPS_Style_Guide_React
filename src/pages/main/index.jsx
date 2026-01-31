// 루트 메인 페이지 컴포넌트

import MainMenuList from "./components/MainMenuList";

export default function MainPage() {
  return (
    <div>
      <div>
        <h1 className="lg:text-5xl font-black text-4xl">COMPONENTS</h1>
        <p className="text-[var(--color-font-gray)] lg:w-2xl my-5 xs:text-sm lg:text-base">
          컴포넌트는 각 기능을 구성하는 요소들의 조합입니다. 컴포넌트 스타일
          가이드라인은 관련 부서 간의 원활한 소통을 위해 컴포넌트의 명칭을
          통일하고 구조, 용도, 종류, 패턴을 정의하는 것을 목적으로 합니다.
        </p>
        <hr className="mb-6" />
      </div>

      {/* 컴포넌트 리스트 뿌려주는 곳 */}
      <div>
        <MainMenuList />
      </div>
    </div>
  );
}
