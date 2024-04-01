import React from 'react'

const loading = () => {
  return (
    <div className='w-full min-h-[700px] flex justify-center items-center'>
        <div className='bg-orange-500 w-[100px] aspect-square rounded-[12px] animate-spin'></div>
    </div>
  )
}

export default loading