import Profile from '@/models/Profile'
import AddProfilePage, { ProfileData } from '@/template/AddProfilePage'
import connectDB from '@/utils/connectDB'
import { NextPageContext } from 'next'
import React from 'react'

type EditProps ={
    params:{profileId:string}
}

const Edit = async ({params}:EditProps) => {
    console.log(params.profileId)

    await connectDB()

    const profile = await Profile.findOne({_id:params.profileId})

    if(!profile) return <h3>مشکلی پیش آمده لطفا دوباره امتحان کنید ...</h3>

  return (
    <AddProfilePage data={profile as ProfileData} />
  )
}

export default Edit