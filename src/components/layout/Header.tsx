'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  const {data} = useSession()

  console.log(data?.user?.email)


  return (
    <header className="w-full flex justify-between items-center bg-orange-500 mt-[10px] px-[20px] py-[15px] rounded-[25px] text-white">
      <div className="w-1 flex-auto">
        <ul className="flex justify-start items-center gap-1">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {
        data ?
        
        <div>
        <Link href="/dashboard" className="flex justify-center items-center gap-1 hover:bg-white hover:text-orange-500 transition-all duration-150 cursor-pointer px-[10px] py-[5px] rounded-[10px]">
          <FaUserAlt />
          <span>داشبورد</span>
        </Link>
      </div>
        :
      <div>
        <Link href="/signin" className="flex justify-center items-center gap-1 hover:bg-white hover:text-orange-500 transition-all duration-150 cursor-pointer px-[10px] py-[5px] rounded-[10px]">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
      }
    </header>
  );
};

export default Header;
