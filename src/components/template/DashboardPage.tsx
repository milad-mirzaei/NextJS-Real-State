import React from 'react'

type DashboardPageProps = {
    createdAt:string
}

const DashboardPage = ({createdAt}:DashboardPageProps) => {
  return (
    <div>
        <h3>سلام 👋</h3>
        <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را تماشا کنند</p>
        <div className='px-[10px] py-[5px] rounded-[12px] bg-orange-200 flex gap-[5px] w-fit mt-[20px]'>
            <p>تاریخ عضویت</p>
            <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
    </div>
  )
}

export default DashboardPage