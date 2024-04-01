'use client'

import Loader from '@/module/Loader';
import { signIn } from 'next-auth/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner'

const SignInPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const signinHandler = async(e:React.MouseEvent)=>{
        e.preventDefault()
        setIsLoading(true)
        console.log(email,password)
        const res = await signIn('credentials',{email:email,password:password,redirect:false})
        setIsLoading(false)
        console.log(res)
        if(res?.error){
            toast.error(res.error)
        }else{
            router.push('/')
        }

    }

  return (
    <div className="w-full h-full flex-auto flex flex-col justify-center   items-center gap-[25px]">
      <h4 className="text-3xl text-orange-500">فرم ورود</h4>
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
        {isLoading ? (
         <Loader/>
        ) : (
          <button
            onClick={(e) => signinHandler(e)}
            className="mt-[40px] h-[40px]  bg-white w-full rounded-[10px] text-orange-500 hover:bg-orange-100 transition-all duration-200 "
          >
            ورود
          </button>
        )}
      </form>
      <p className="flex gap-[7px] text-gray-500">
        حساب کاربری ندارید ؟
        <Link href="/signup" className="text-orange-500">
          ثبت نام
        </Link>
      </p>
    </div>
  )
}

export default SignInPage