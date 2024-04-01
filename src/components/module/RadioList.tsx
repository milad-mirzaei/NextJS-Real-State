import { ProfileData } from "@/template/AddProfilePage";
import React from "react";

type RadioListProps = {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
};

const RadioList = ({ profileData, setProfileData }: RadioListProps) => {
  const { category } = profileData;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const categories: { title: string; value: string }[] = [
    { title: "ویلا", value: "villa" },
    { title: "آپارتمان", value: "apartment" },
    { title: "مغازه", value: "store" },
    { title: "دفتر", value: "office" },
  ];

  return (
    <div>
      <p>دسته بندی</p>
      <div className="flex justify-start items-center gap-[5px]">
        {categories.map((cat, index) => (
          <div className="px-[10px] bg-orange-100 py-[5px] rounded-[10px] flex justify-center items-center gap-[5px]" key={index}>
            <label htmlFor={cat.value}>{cat.title}</label>
            <input
              type="radio"
              name="category"
              className=" " 
              value={cat.value}
              id={cat.value}
              checked={category == cat.value}
              onChange={changeHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioList;
