import { ProfileData } from "@/template/AddProfilePage";
import { p2e } from "@/utils/replaceNumber";
import React from "react";

type TextInputProps = {
  title: string;
  name:
    | "title"
    | "description"
    | "location"
    | "phone"
    | "price"
    | "realState"
    | "category";
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  textarea?: boolean;
};

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}: TextInputProps) => {
  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div>
      <p className="text-gray-500">{title}</p>
      {textarea ? (
        <textarea className="w-full h-[100px] resize-none bg-orange-100 focus:ring-0 outline-none px-[10px] py-[7px] text-sm rounded-[12px] border-[1px] focus:border-orange-500" name={name} value={profileData[name]} onChange={changeHandler} />
      ) : (
        <input className="w-full bg-orange-100 focus:ring-0 outline-none px-[10px] py-[7px] text-sm rounded-[12px] border-[1px] focus:border-orange-500" type="text"name={name} value={profileData[name]} onChange={changeHandler} />
      )}
    </div>
  );
};

export default TextInput;
