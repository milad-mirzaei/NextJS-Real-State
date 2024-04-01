import { authOptions } from '@/appapi/auth/[...nextauth]/route'
import SignUpPage from '@/template/SignUpPage'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
  return (
    <SignUpPage/>
  )
}

export default page