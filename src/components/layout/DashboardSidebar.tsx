import { authOptions } from "@/appapi/auth/[...nextauth]/route";
import LogoutButton from "@/module/LogoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

type DashboardSidebarProps = {
  children: React.ReactNode;
};

const DashboardSidebar = async ({ children }: DashboardSidebarProps) => {
  const session = await getServerSession(authOptions);

  const menuItems: { title: string; href: string }[] = [
    {
      title: "حساب کاربری",
      href: "/dashboard",
    },
    {
      title: "آگهی های من",
      href: "/dashboard/my-profiles",
    },
    {
      title: "ثبت آگهی",
      href: "/dashboard/add",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center items-start pt-[30px]">
      <div className="w-[25%] h-full  flex flex-col justify-start items-center gap-[10px] text-gray-500">
        <div className="flex flex-col justify-center items-center p-[10px] py-[25px] gap-[20px] mt-[10px] w-[90%] rounded-[12px] border-[1px]">
          <CgProfile className="text-orange-500" size={50} />
          <p>{session?.user?.email}</p>
          <div className="w-[90%] h-[1px] bg-gray-200"></div>
          <div className="w-[90%] flex flex-col justify-start items-start gap-[10px]">
            {menuItems.map((item,index)=><Link key={index} className="hover:text-orange-500" href={item.href}>
              {item.title}
            </Link>)}
            <LogoutButton/>
          </div>
        </div>
      </div>
      <div className="w-[75%] h-full">{children}</div>
    </div>
  );
};

export default DashboardSidebar;
