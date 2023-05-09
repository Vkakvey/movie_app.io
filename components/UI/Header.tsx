import React from 'react'
import Link from 'next/link'
import Search from './Search'
const Header = () => {
  return (
    <header className='backdrop:blur-sm fixed w-full top-0 z-50'>
        <div className='flex w-full max-w-[1040px] items-center justify-between h-16 container mx-auto'>
            <Link href='/'>
                <h1 className='text-xl font-bold text-blue-500 '>Moovee</h1>
            </Link>
           <Search/>
        </div>
    </header>
  )
}

export default Header
