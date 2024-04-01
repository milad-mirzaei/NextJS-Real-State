import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HomePage from "@/template/HomePage";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session) redirect("/signin")
  return (
    <HomePage/>
  );
}
