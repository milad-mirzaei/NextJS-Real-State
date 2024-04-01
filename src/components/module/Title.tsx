import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <p className="text-orange-500 text-xl mt-[30px] border-b-[2px] pb-[10px] w-full">{title}</p>
  )
}

export default Title