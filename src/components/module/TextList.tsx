import { ProfileData } from "@/template/AddProfilePage";
import React from "react";

type TextListProps = {
  title: string;
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  type: "amenities" | "rules";
};

const TextList = ({
  profileData,
  setProfileData,
  title,
  type,
}: TextListProps) => {
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
    const {value} = e.target
    const list = [...profileData[type]]
    list[index] = value
    setProfileData({...profileData,[type]:list})
}
const deleteHandler = (index:number)=>{
    const list = [...profileData[type]]
    list.splice(index,1)
    setProfileData({...profileData,[type]:list})
}

  return (
    <div>
      <div className=" flex flex-col justify-start items-start gap-[5px] w-full">
        <p>{title}</p>
        <div className="w-full flex flex-wrap gap-[5px]">
          {profileData[type].map((item, index) => (
            <div className="w-[48%] relative" key={index}>
              <input
                type="text"
                className="w-full bg-orange-100 focus:ring-0 outline-none px-[10px] py-[7px] text-sm rounded-[12px] border-[1px] focus:border-orange-500"
                value={item}
                onChange={(e)=>changeHandler(e,index)}
              />
              <div className="absolute top-0 left-0 cursor-pointer px-[10px] py-[7px] rounded-[12px] bg-orange-500 text-white flex justify-center items-center"
              onClick={()=>deleteHandler(index)}
              >حذف</div>
            </div>
          ))}
        </div>

        <button
          onClick={addHandler}
          className="bg-orange-500 text-white flex justify-center items-center px-[10px] py-[5px] rounded-[10px]"
        >
          افزودن
        </button>
      </div>
    </div>
  );
};

export default TextList;
