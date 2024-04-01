import { authOptions } from "@/appapi/auth/[...nextauth]/route";
import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout = async ({ children }: layoutProps) => {
    const session = await getServerSession(authOptions)

    if(!session) redirect("/signin")

  return <DashboardSidebar>{children}</DashboardSidebar>;
};

export default layout;
