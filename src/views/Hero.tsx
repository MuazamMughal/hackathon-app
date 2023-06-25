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



const Hero = () => {
  return (
    <section className='mx-32' >
        {/*left div*/}
        <div>
            
            <Badge className=' h-10 w-28 text-lg  font-semibold pl-4 rounded-md  bg-blue-100 text-indigo-600'>Sale 70%</Badge>

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
               An Industrial Take on Streetwear
            </h1>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
             </p>

             <Link href={""}>
             <Button className=' text-md h-14 w-64 bg-gray-900 font-semibold'>
                 <ShoppingCart className="mr-2 h-6 w-8" /> Start Shopping
               </Button>
               </Link>


             <ul className='flex flex-wrap gap-16 '>
              <li><Image src = {Featured1} alt='bazaar' width={110}></Image></li>
              <li><Image src = {Featured2} alt='bazaar' width={110}></Image></li>
              <li><Image src = {Featured3} alt='bazaar' width={110}></Image></li>
              <li><Image src = {Featured4} alt='bazaar' width={110}></Image></li>
              </ul>  


        </div>



        {/*right div*/}

        <div className=''>

          <div>


          </div>


        </div>


    </section>
  )
}

export default Hero