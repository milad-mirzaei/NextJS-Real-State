import { ProfileData } from "@/template/AddProfilePage";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import React from "react";
import { BiLeftArrow, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

type CardProps = {
  data: ProfileData;
};

const Card = ({ data }: CardProps) => {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className="border-[1px] w-full text-sm rounded-[12px] p-[10px] flex flex-col justify-start items-start gap-[3px] ">
      <div className="w-fit p-[5px] rounded-[5px] bg-orange-200 text-orange-500">{icons[data.category]}</div>
      <p>{data.title}</p>
      <p className="w-full flex justify-start gap-[3px] items-center">
      <HiOutlineLocationMarker/>
        {data.location}
      </p>
      <p>{sp(data.price)} تومان</p>
      <Link className="w-full flex justify-between items-center text-orange-500" href={`/buy-residential/${data._id}`}>
        مشاهده آگهی
        <BiLeftArrow />
      </Link>
    </div>
  );
};

export default Card;
