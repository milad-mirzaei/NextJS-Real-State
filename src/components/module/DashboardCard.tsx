'use client'

import { ProfileData } from "@/template/AddProfilePage";
import React from "react";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

type DashboardCardProps = {
  data: ProfileData;
};

const DashboardCard = ({ data }: DashboardCardProps) => {
    const router = useRouter()

    const editHandler = ()=>{
        router.push(`/dashboard/my-profiles/${data._id}`)
    }

    const deleteHandler = async ()=>{
      const res = await fetch(`/api/profile/delete/${data._id}`,{
        method:"DELETE"
      });
      const resData = await res.json()
      if(resData.error){
        toast.error(resData.error)
      }else{
        toast.success(resData.message)
        router.refresh()
      }

    }

  return (
    <div className="w-full border-[1px] rounded-[12px] p-[10px] flex justify-center items-center">
      <div className="w-[30%] h-[157px] flex justify-center items-center">
        <Card data={data} />
      </div>
      <div className="w-1 flex-auto h-[157px] flex justify-center items-end gap-[20px]">
        <button className=" w-1/2 max-w-[175px] flex justify-center items-center gap-[7px] rounded-[12px] py-[5px] bg-yellow-400 hover:bg-yellow-500 transition-all duration-150 text-white "
        onClick={editHandler}
        >
        ویرایش
        <FiEdit/>
        </button>
        <button className=" w-1/2 max-w-[175px] flex justify-center items-center gap-[7px] rounded-[12px] py-[5px] bg-red-600 hover:bg-red-500 transition-all duration-150 text-white "
        onClick={deleteHandler}
        >
          حذف
          <AiOutlineDelete/>
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
