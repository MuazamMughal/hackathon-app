import Image from 'next/image'
import React from 'react'
import logo from "/public/logo.webp"
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react'


const Header = () => {
  return (
    <div>
      <div className='flex flex-row  flex-wrap justify-between mx-32 my-8 '>
         <div className='flex  flex-wrap justify-center items-center'>
           <Link href={""}><Image src = {logo} alt='logo' width={140}></Image></Link>
         </div>
      
         <ul className='flex flex-row gap-12 pl-4 pt-2 items-center text-m  text-black'>
           <li><Link href={""}>Female</Link></li>
           <li><Link href={""}>Male</Link></li>
           <li><Link href={""}>Kids</Link></li>
           <li><Link href={""}>All Products</Link></li>
         </ul>
         
         
        
         <div className='flex  flex-wrap w-1/3 px-6 pt-2 justify-center items-center'>
           <div className='flex h-7 flex-row border-spacing-2 items-center border  rounded-md border-gray-200 w-full'><Search className=' text-gray-400 pl-2 h-4 w-6'/> <Input/></div>
         </div>

         <div className='bg-gray-200  h-10 w-10 flex rounded-full mx-4 justify-center items-center' >
           <ShoppingCart/>
         </div>
        
        </div>
    </div>
  )
}

export default Header