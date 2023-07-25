import { Badge } from '@/components/ui/badge'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Featured1 from '/public/4brands/Featured1.webp'
import Featured2 from '/public/4brands/Featured2.webp'
import Featured3 from '/public/4brands/Featured3.webp'
import Featured4 from '/public/4brands/Featured4.webp'
import Image from 'next/image'
import header from '/public/header.webp'



const Hero = () => {
  return (
    <div className='flex justify-between items-center ' >
      {/*left div*/}
      <div className='  space-y-10  max-w-lg  lg:max-w-2xl '>

        <Badge className='  h-10 w-28 my-2 text-lg  font-semibold pl-4 rounded-md  bg-blue-100 text-indigo-600'>Sale 70%</Badge>

        <h1 className="  scroll-m-20 text-6xl lg:max-w-xl tracking-wide font-bold  ">
          An Industrial Take on Streetwear
        </h1>

        <p className="leading-7 max-w-xs  text-grey-400 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>

        <Link href={""}>
          <Button className=' my-10 text-md h-16 lg:w-72 bg-gray-900  hover:bg-grey-900 font-semibold'>
            <ShoppingCart className="mr-2 h-6  w-8" /> Start  Shopping
          </Button>
        </Link>


        <div className='flex  gap-4 '>
          <div className='w-14 md:w-28'>
            <Image src={Featured1} alt='bazaar' width={100} height={100}></Image> </div>
          <div className='w-14 md:w-28'>
            <Image src={Featured2} alt='bazaar' width={100} height={100}></Image> </div>
          <div className='w-14 md:w-28'>
            <Image src={Featured3} alt='bazaar' width={100} height={100}></Image> </div>
          <div className='w-14 md:w-28'>
            <Image src={Featured4} alt='bazaar' width={100} height={100}></Image> </div>
        </div>


      </div>



      {/*right div*/}

      <div className='hidden md:pb-20  md:flex  lg:flex ' >


        <div className=' bg-orange-50 rounded-full '>

          <div className='  '>
            <Image src={header} alt='main image' />


          </div>

        </div>

      </div>


    </div>
  )
}

export default Hero