import Link from "next/link";
import React from "react";
import { HiFilter } from "react-icons/hi";

type SidebarProps = {
    searchParams:{category:'villa' | 'apartment' | 'store' | 'office' } 
}
 
const Sidebar = ({searchParams}:SidebarProps) => {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { office: "دفتر" },
    { store: "مغازه" },
  ];


  return (
    <div className="w-[75%] mt-[20px] flex flex-col p-[20px] pr-[30px] border-[1px] gap-[10px] rounded-[12px]">
      <p className="flex gap-[5px] justify-start font-bold items-center">
        <HiFilter className="text-orange-500" />
        دسته بندی
      </p>
      <Link className={ `${searchParams?.category ? 'text-gray-500' : 'text-orange-500'}  `} href="/buy-residential">همه</Link>
      {queries.map((q, i) => (
        <Link className={ `${searchParams?.category == Object.keys(q)[0]  ? 'text-orange-500' : 'text-gray-500'}  `}
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(q) },
          }}
          key={i}
        >
          {Object.values(q)}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
