'use client'

import { signOut } from 'next-auth/react'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const LogoutButton = () => {

  return (
    <button className='flex justify-center items-center gap-[5px] text-red-600'
    onClick={()=>signOut()}
    >
        <FiLogOut/>
        خروج
    </button>
  )
}

export default LogoutButton