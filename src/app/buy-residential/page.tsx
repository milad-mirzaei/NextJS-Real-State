import { ProfileData } from '@/template/AddProfilePage'
import BuyResidential from '@/template/BuyResidential'
import React from 'react'

const page = async (props:any) => {
    console.log(props.searchParams)

    const res = await fetch('http://localhost:3000/api/profile',{cache:'no-store'})
    const data = await res.json()

    if(data.error) return <h3>مشکلی پیش آمده است</h3>

    let finalData = data.data

    if(props.searchParams.category){
        finalData = finalData.filter((profile:ProfileData,index:number)=>profile.category == props.searchParams.category)
    }

  return (
    <BuyResidential data={finalData} searchParams={props.searchParams} />
  )
}

export default page