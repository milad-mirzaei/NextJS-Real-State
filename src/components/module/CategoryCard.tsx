import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CategoryCardProps = {
    name:string,
    title:string
}

const CategoryCard = ({name,title}:CategoryCardProps) => {
  return (
    <div className='rounded-[12px] border-[1px] p-[5px] hover:scale-105 transition-all duration-150' >
        <Link  href={`/buy-residential?category=${name}`} className='  flex flex-col justify-start items-center text-orange-500 gap-[10px]'  >
            <Image
            className='rounded-[11px]'
             src={`/images/${name}.png`}
             alt={title}
             width={240}
             height={144}
             priority={true}
            />
            <p>{title}</p>
        </Link>
    </div>
  )
}

export default CategoryCard