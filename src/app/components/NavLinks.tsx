'use client'
import React from 'react'
import { categories } from '../../../constants'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

function NavLinks() {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path
    }
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 md:text-lg text-sm max-w-6xl mx-auto pb-5 border-b'>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActived={isActive(category)} />
      ))}
    </nav>
  )
}

export default NavLinks
