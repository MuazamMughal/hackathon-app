import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const NewsLatter = () => {
  return (
      <div className='  relative h-[25rem] flex flex-col item-center justify-center text-center sp'>
          <div className=' absolute md:text-6xl   font-extrabold lg:text-9xl -z-50 inset-32'>
              <h1 className=' text-gray-100'>  Newsletter </h1>
               </div>


          <div className=' flex flex-col gap-6 '>
              <h1 className='text-3xl  font-bold tracking-wide '>
                  Subscribe Our Newsletter

              </h1>
              <p className=''>
                  Get the latest information and promo offers directly  </p>

              <div className="flex items-center lg:flex-row flex-col justify-center gap-2 ">
                  <Input className='border rounded-none h-8  border-slate-950 w-72' type="email" placeholder="Input email address" />
                  <Button className='h-9 text-white' type="submit">Get Started</Button>
              </div>

          </div>
    </div>
  )
}

export default NewsLatter