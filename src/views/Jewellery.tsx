import Image from 'next/image'
import React from 'react'
import jwellery from '/public/jwellery.webp'
import { Button } from '@/components/ui/button'
const Jewellery = () => {
  return (
    <div className='my-32'>
      {/* upper side  */}

      <div className='flex   justify-start  md:justify-end py-4 tracking-widet text-4xl md:text-5xl  font-extrabold '>
        <h1 className="  max-w-3xl   ">
          Unique and Authentic Vintage Designer Jewellery</h1>
      </div>
      {/* lower side  */}

      <div className=' flex flex-col md:flex-row justify-between py-4 mt-2 gap-5 '>

        {/* left side  */}

        <div className='relative basis-1/2 grid gap-6 lg:gap-10 grid-row-2 grid-cols-2'>
          <div className='absolute inset-0 -z-50'>
            <h1 className='text:5xl  md:text-7xl   lg:text-8xl  font-extrabold  leading-[5.9rem]  text-neutral-100  '> Different from others</h1>
          </div>
          <div className=' max-w-[13rem] space-y-2'>
            <h5 className=' text-xl font-semibold '>
              Using Good Quality Materials
            </h5>
            <p>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className=' max-w-[13rem] space-y-2'>
            <h5 className=' text-xl font-semibold '>
              100% Handmade Products
            </h5>
            <p>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className=' max-w-[13rem] space-y-2'>
            <h5 className=' text-xl font-semibold '>
              Modern Fashion Design
            </h5>
            <p>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className=' max-w-[13rem] space-y-2'>
            <h5 className=' text-xl font-semibold '>
              Discount for Bulk Orders
            </h5>
            <p>
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>




        </div>



        {/* right  side  */}
        <div className='flex flex-col lg:flex-row basis-1/2'>
          <div className='w-full px-4 lg:px-0 lg:w-80'>
            <Image src={jwellery} alt='image' width={1000} ></Image>
          </div>
          <div className=' space-y-3 md:space-y-4 p-6 '>
            <p className='text-lg h-[80%] max-w-[15rem] '>
              This piece is ethically crafted in our small
              family-owned workshop in Peru with unmatched attention to detail
              and care. The Natural color is the actual natural color of the fiber,
              undyed and 100% traceable.
            </p>
            <Button className=' text-white hover:bg-black rounded-md py-2 px-6'>See All Product</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Jewellery