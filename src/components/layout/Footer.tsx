import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between items-start bg-orange-500
    rounded-[25px] text-white  p-[30px] '>
        <div>
            <h3>سامانه خرید و اجاره ملک</h3>
            <p>این یک متن آزمایشی هسا</p>
        </div>
        <div>
            <ul className='flex flex-col justify-start items-start list-disc'>
                <li>تعرفه قانونی</li>
                <li>دسترسی سریع</li>
                <li>مشاورین خبره</li>
                <li>قولنامه محضری</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer