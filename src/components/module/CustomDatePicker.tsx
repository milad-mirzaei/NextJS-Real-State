import React from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { ProfileData } from '@/template/AddProfilePage'
import "react-multi-date-picker/styles/colors/red.css"

type CustomDatePickerProps = {
    profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

const CustomDatePicker = ({profileData,setProfileData}:CustomDatePickerProps) => {

    const changeHandler = (e:DateObject)=>{
        const date = new Date(e.unix)
        setProfileData({...profileData,constructionDate:date})
    }

  return (
    <div className="w-fit bg-orange-100 focus:ring-0 outline-none px-[10px] py-[7px] text-sm rounded-[12px] border-[1px] focus:border-orange-500">
        <p>تاریخ ساخت</p>
        <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
        className='red'
        />
    </div>
  )
}

export default CustomDatePicker