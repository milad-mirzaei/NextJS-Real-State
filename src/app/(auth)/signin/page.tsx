import { authOptions } from '@/appapi/auth/[...nextauth]/route'
import SignInPage from '@/template/SignInPage'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)
  if(session) redirect("/")
  return (
    <SignInPage/>
  )
}

export default page