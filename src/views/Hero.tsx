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
    <section className='flex  mt-16' >
        {/*left div*/}
        <div className='flex-1'>
            
            <Badge className=' my-10 h-10 w-28 text-lg  font-semibold pl-4 rounded-md  bg-blue-100 text-indigo-600'>Sale 70%</Badge>

            <h1 className="  scroll-m-20 text-6xl  tracking-wide font-bold  ">
               An Industrial Take on Streetwear
            </h1>

            <p className="leading-7  text-grey-400 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you<br/> wear Dine outfits.
             </p>

             <Link  href={""}>
             <Button className=' my-10 text-md h-16 w-72 bg-gray-900 font-semibold'>
                 <ShoppingCart className="mr-2 h-6 w-8" /> Start Shopping
               </Button>
               </Link>


             <ul className='flex flex-wrap my-20 gap-20 '>
              <li><Image src = {Featured1} alt='bazaar' width={110}></Image></li>
              <li><Image src = {Featured2} alt='bazaar' width={110}></Image></li>
              <li><Image src = {Featured3} alt='bazaar' width={110}></Image></li>
              <li><Image src = {Featured4} alt='bazaar' width={110}></Image></li>
              </ul>  


        </div>



        {/*right div*/}

        <div className=' flex-1' >
         

         <div className= ' flex items-center justify-center m-24 absolute bg-orange-100 rounded-full'>

            <div className='pl-8 relative '>
                <Image src={header} alt='main image' width={650} />


             </div>

        </div>
        
        </div>


    </section>
  )
}

export default Hero