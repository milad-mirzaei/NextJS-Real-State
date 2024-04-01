"use client";

import Loader from "@/module/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    setIsLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setIsLoading(false);
    console.log(res.status);
    if (res.status == 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="w-full h-full flex-auto flex flex-col justify-center   items-center gap-[25px]">
      <h4 className="text-3xl text-orange-500">فرم ثبت نام</h4>
      <form className="flex flex-col justify-center items-start gap-[14px] bg-orange-500   rounded-[25px] px-[30px] py-[40px] text-white">
        <label>ایمیل :</label>
        <input
          type="text"
          value={email}
          placeholder="ایمیل خود را وارد کنید"
          className="bg-white p-[10px] rounded-[10px] outline-none focus:ring-0 w-[250px]  placeholder:text-xs text-orange-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور :</label>
        <input
          type="password"
          value={password}
          placeholder="رمز عبور خود را وارد کنید"
          className="bg-white p-[10px] rounded-[10px] outline-none focus:ring-0 w-[250px] placeholder:text-xs text-orange-500 "
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>تکرار رمز عبور :</label>
        <input
          type="password"
          value={rePassword}
          placeholder="تکرار رمز عبور"
          className="bg-white p-[10px] rounded-[10px] outline-none focus:ring-0 w-[250px] placeholder:text-xs text-orange-500 "
          onChange={(e) => setRePassword(e.target.value)}
        />
        {isLoading ? (
          <Loader/>
        ) : (
          <button
            onClick={(e) => signupHandler(e)}
            className="mt-[40px] h-[40px]  bg-white w-full rounded-[10px] text-orange-500 hover:bg-orange-100 transition-all duration-200 "
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="flex gap-[7px] text-gray-500">
        حساب کاربری دارید ؟
        <Link href="/signin" className="text-orange-500">
          ورود
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
