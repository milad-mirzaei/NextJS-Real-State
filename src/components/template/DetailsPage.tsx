import React from "react";
import { ProfileData } from "./AddProfilePage";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Title from "@/module/Title";
import ItemList from "@/module/ItemList";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { e2p, sp } from "@/utils/replaceNumber";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiCalendarCheck, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

type DetailsPageProps = {
  data: ProfileData;
};

const DetailsPage = ({ data }: DetailsPageProps) => {

  const categories = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { office: "دفتر" },
    { store: "مغازه" },
  ]

  const icons = {
    villa:<RiHome3Line/>,
    apartment:<MdApartment/>,
    store:<BiStore/>,
    office:<GiOfficeChair/>
  }


  return (
    <div className="flex w-full mt-[50px]">
      <div className="w-[75%] flex flex-col justify-start items-start gap-[10px]">
        <h4 className="text-orange-500 text-2xl">{data.title}</h4>
        <p className=" flex text-gray-500 justify-center gap-[3px] items-start">
          <HiOutlineLocationMarker />
          {data.location}
        </p>
        <Title title="توضیحات" />
        <p className="w-full text-gray-500">{data.description}</p>
        <Title title="امکانات" />
        <ItemList items={data.amenities} />
        <Title title="قوانین" />
        <ItemList items={data.rules} />
      </div>
      <div className="w-[25%] flex flex-col justify-start items-center gap-[10px]">
        <div className="flex flex-col justify-start items-center border-[1px] rounded-[12px] p-[20px] gap-[15px] ">
          <SiHomebridge className="text-orange-500" size={40}/>
          <p>املاک {data.realState}</p>
          <div className="flex gap-[3px] justify-center items-center">
           <AiOutlinePhone className="text-orange-500" />
          <p>{e2p(data.phone)}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center border-[1px] rounded-[12px] p-[20px] gap-[15px] ">
          <div className="flex justify-center items-center gap-[3px]">
            <div className="text-orange-500">
            {icons[data.category]}
            </div>
            {Object.values(categories).find((cat)=>{
              return Object.keys(cat)[0] == data.category})![data.category]}
          </div>
          <div>{sp(data.price)} تومان </div>
          <div className="flex justify-center items-center gap-[5px]">
            <div className="text-orange-500">
            <BiCalendarCheck/>
            </div>
            {data.constructionDate.toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
