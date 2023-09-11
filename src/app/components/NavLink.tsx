import Link from 'next/link';
import React from 'react'

type Props ={
    category: string;
    isActived: boolean;
}

function NavLink({category, isActived}: Props) {
  return (
    <Link href={`/news/${category}`} className={`navLink ${isActived && 'underline decoration-red-500 underline-offset-4 font-bold text-lg'}`}>
      {category}
    </Link>
  )
}

export default NavLink
