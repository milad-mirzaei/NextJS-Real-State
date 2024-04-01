import { authOptions } from '@/appapi/auth/[...nextauth]/route'
import User from '@/models/User'
import DashboardPage from '@/template/DashboardPage'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
    await connectDB()
    const session = await getServerSession(authOptions)
    const user = await User.findOne({email:session?.user?.email})
  return (
    <DashboardPage createdAt={user.createdAt}/>
  )
}

export default page