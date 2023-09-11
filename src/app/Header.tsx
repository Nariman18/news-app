import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './components/NavLinks'
import SearchBox from './components/SearchBox'
import DarkModeButton from './components/DarkModeButton'

function Header() {
  return (
    <header>
      <div className='grid grid-cols-3 items-center p-10'>
        <Bars3Icon className='h-8 w-8 text-transparent'/>
        <Link href='/'>
            <h1 className='font-serif text-xl md:text-3xl text-center'><span className='underline decoration-6 decoration-red-500'>Nariman&apos;s</span>{" "}news</h1>
        </Link>

        <div className='flex justify-end'>
            <DarkModeButton />
        </div>
        </div>

        <NavLinks />

        <SearchBox />
    </header>
  )
}

export default Header
