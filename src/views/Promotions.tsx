import Image from 'next/image'
import React from 'react'
import event1 from 'public/Promotions/event1.webp'
import event2 from 'public/Promotions/event2.webp'
import event3 from 'public/Promotions/event3.webp'
import { Button } from '@/components/ui/button'


const Promotions = () => {
  return (
    <div className='pt-24'>
      {/*top tags */}
      <div className='flex flex-col justify-center items-center '>
        <p className='  text-sm font-bold tracking-widest text-blue-600 '> PROMOTIONS</p>
        <h1 className=' py-4 scroll-m-20  text-4xl font-bold tracking-wider transition-colors first:mt-0'>Our Promotions Events</h1>
      </div>

      {/*Grids */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">

        

       {/*first */}

          <div className="  flex justify-evenly w-full col-span-2  h-56  gap-y-4 bg-neutral-300">
            {/*internal devs of the first */}
            <div className='  max-w-[13rem] pl-8 py-8'>
              <span className="scroll-m-20   text-3xl font-bold tracking-tight transition-colors first:mt-0">
                GET UP TO </span>
              <span className='text-4xl font-san font-extrabold'>60&#37;</span>
              <p className='text-xl  tracking-wide'>
                For the summer season
              </p>
            </div>
            <div className='pt-3 '>
              <Image src={event1} alt='' width={270} />
            </div>
          </div>




       

        {/*second*/}


        <div className=" bg-orange-100 row-span-2 h-full w-full">


          <div className='mr-32 my-4'>
            <p className='font-serif font-thin'>
              Flex Sweatshirt
            </p>
            <span className='line-through  '>$100.00  </span><span className='font-bold text-xl'>$75.00</span>
            
          </div>

          <div className= ' flex items-baseline  pt-2 '>

            <Image src={event2} alt='img' width={250}  />
          </div>

        </div>



        {/*third */}

        <div className='w-full row-span-2 h-full  bg-neutral-300  items-center'>

          <div className='mr-20 my-4'>
            <p className='font-serif font-thin'>
              Flex Push Button Bomber
            </p>
            <span className='line-through  '>$225.00 </span>
            <span className='font-bold text-xl'>$190.00</span>
          </div>

          <div className='pt-2 h-2/3'>
          <Image src={event3} alt='' width={250} />
          
          </div>

        </div>





        {/*fourth*/}

        <div className='col-span-2 w-full h-48  flex flex-col bg-zinc-900 items-center justify-center '>
          <h1 className="pt-6 text-4xl text-gray-100 font-extrabold  lg:text-4xl">
            GET 30% Off
          </h1>
          <p className="leading-7 text-sm text-gray-200 [&:not(:first-child)]:mt-4">
            USE PROMO CODE
          </p>
          <Button className=' bg-zinc-600 hover:bg-zinc-600 rounded-lg lg:md:w-80  font-bold tracking-widest text-lg'>DINEWEEKENDSALE</Button>

        </div>


      </div>
    </div>
  )
}

export default Promotions