import CategoryCard from "@/module/CategoryCard";
import React from "react";
import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

const HomePage = () => {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];

  return (
    <div>
        <div className="h-[300px]  flex flex-col justify-center items-center gap-[40px]">
          <h1 className="text-orange-500 text-5xl">سامانه خرید و اجاره ملک</h1>
          <ul className="flex justify-center items-center gap-[20px]" >
            {services.map((ser, index) => (
              <li className="flex justify-center items-center gap-[5px] p-[5px] rounded-[10px] text-base bg-orange-200 text-orange-500" key={index}>
                <FiCircle />
                <span>{ser}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
            <CategoryCard title="خانه ویلایی" name="villa" />
            <CategoryCard title="آپارتمان" name="apartment" />
            <CategoryCard title="مغازه" name="store" />
            <CategoryCard title="دفتر" name="office" />
        </div>
        <div className=" h-[300px] w-full text-orange-500 flex flex-col justify-center items-center gap-[40px]">
            <h3 className=" text-4xl">شهر های پر بازدید</h3>
            <ul className="w-full flex flex-wrap justify-center items-center gap-[10px] gap-y-[20px]">
                {cities.map((city,index)=>(
                    <li className="flex justify-center items-center gap-[5px] w-[22%] bg-orange-200 rounded-[12px]  p-[10px]" key={index}>
                        <FaCity/>
                        <span>{city}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default HomePage;
