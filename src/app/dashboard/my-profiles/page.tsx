import { authOptions } from '@/appapi/auth/[...nextauth]/route'
import User from '@/models/User'
import MyProfilesPage from '@/template/MyProfilesPage'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {

    await connectDB()

    const session =await getServerSession(authOptions)

    const [user] = await User.aggregate([
        {
            $match : {email:session?.user?.email}
        },{
            $lookup:{
                from:"profiles",
                foreignField:"userId",
                localField:"_id",
                as:"profiles"
            }
        }
    ])

    console.log(user.profiles)

  return (
    <MyProfilesPage profiles={user.profiles} />
  )
}

export default page