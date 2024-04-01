import React from "react";
import { ProfileData } from "./AddProfilePage";
import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";

type BuyResidentialProps = {
  data: ProfileData[];
  searchParams: { category: "villa" | "apartment" | "store" | "office" };
};

const BuyResidential = ({ data, searchParams }: BuyResidentialProps) => {
  return (
    <div className="w-full flex justify-start items-start">
      <div className="w-[25%] ">
        <Sidebar searchParams={searchParams} />
      </div>
      <div className="w-[75%] flex justify-start items-start gap-[10px] flex-wrap pt-[20px]">
        {data.map((prof, index) => (
          <div key={index} className="w-[23%] flex justify-center items-center">
            <Card data={prof} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyResidential;
