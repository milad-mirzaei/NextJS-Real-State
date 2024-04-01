"use client";
import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

export type ProfileData = {
  _id?: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: 'villa' | 'apartment' | 'store' | 'office';
  rules: string[];
  amenities: string[];
};

type AddProfilePageProps = {
  data?: ProfileData;
};

const AddProfilePage = ({ data }: AddProfilePageProps) => {
  const router = useRouter()
  const [profileData, setProfileData] = useState<ProfileData>({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "villa",
    rules: [""],
    amenities: [""],
  });

  useEffect(() => {
    data && setProfileData(data);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async () => {
    setIsLoading(true);
    console.log(profileData);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setIsLoading(false);
    if (data.error) {
      toast.error(data.error);
      console.log(data);
    } else {
      toast.success(data.message);
      setProfileData({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "villa",
        rules: [""],
        amenities: [""],
      });
      console.log("success", data);
      router.push(`/dashboard/my-profiles`)
      router.refresh()
    }
  };

  const editHandler = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/profile`, {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    setIsLoading(false)
    if(data.error){
      toast.error(data.error)
    }else{
      toast.success(data.message)
      router.push(`/dashboard/my-profiles`)
      router.refresh()
    }
  };

  return (
    <div className="flex flex-col gap-[10px] overflow-y-auto h-full">
      <h3 className="text-orange-500 bg-orange-100 rounded-[11px] text-xl px-[20px] py-[10px]">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        textarea
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تلفن"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت (تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        title="امکانات رفاهی"
        type="amenities"
      />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        title="قوانین"
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {isLoading ? (
        <div className="w-full py-[10px] mb-[20px] flex justify-center items-center rounded-[12px] border-[1px] border-orange-500">
          <Loader />
        </div>
      ) : (
        <button
          onClick={data ? editHandler : submitHandler}
          className="w-full py-[10px] mb-[20px] flex justify-center items-center rounded-[12px] text-orange-500 border-[1px] border-orange-500"
        >
          {data ? "ویرایش آگهی" : "ثبت آگهی"}
        </button>
      )}
    </div>
  );
};

export default AddProfilePage;
