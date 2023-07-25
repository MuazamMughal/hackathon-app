import Image from 'next/image'
import React from 'react'
import logo from "/public/logo.webp"
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react'




const Header = () => {
  return (
    <div>
      <div className='flex  items-center justify-between   py-8  lg:space-x-16'>
        <div className='w-36 flex-shrink-0'>
          <Link href={""}><Image src={logo} alt='logo' width={300}></Image></Link>
        </div>
        <div className='hidden  lg:flex items-center w-full md:gap-10  justify-between   '>
          <ul className='flex flex-row gap-12  items-center text-lg  text-black'>
            <li><Link href={"category/Female"}>Female</Link></li>
            <li><Link href={"category/Male"}>Male</Link></li>
            <li><Link href={"category/Kids"}>Kids</Link></li>
            <li ><Link href={"/products"}>All Products</Link></li>
          </ul>



          <div className=' flex items-center justify-center border h-6  w-1/2  border-stone-300 rounded-md'>

            <Search className='py-1 text-slate-500  mx-1' />

            <Input
              className=' h-6   border-stone-900 rounded-md'
              type='search'
              placeholder='What you looking for'
            />

          </div>

          <div className='bg-gray-200   flex-shrink-0 h-12 w-12 flex rounded-full  justify-center items-center' >
            <ShoppingCart className='' />
          </div>

        </div>
        <div className='flex lg:hidden'>
          <Menu />
        </div>
        <div className='flex lg:hidden'>
          <X />
        </div>
      </div>

    </div>
  )
}

export default Header