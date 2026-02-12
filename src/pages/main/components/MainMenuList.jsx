// 메인 페이지에 있는 메뉴 리스트를 뿌려주는 컴포넌트

import { Link } from "react-router-dom";

export default function MainMenuList({ filteredComponents }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[20px]">
      {filteredComponents.map((route) => (
        <div key={route.id}>
          <Link to={route.href}>
            <img
              src={route.img}
              alt={route.title}
              width={290}
              height={288}
              className="xs:w-full object-cover transition-all duration-400 ease-in-out hover:-translate-y-1 hover:shadow-lg rounded border border-gray-200"
            />
          </Link>
          <h2 className="text-2xl font-bold mt-3 mb-2">{route.title}</h2>
          <p className="text-sm text-[var(--color-font-gray)]">
            {route.description}
          </p>
        </div>
      ))}
    </div>
  );
}
