import React from 'react'

const EndFooter = () => {
  return (
      <div className=' border-t   border-gray-900'>
          <div  >
              <ul className='flex flex-col gap-4 md:flex-row lg:flex-row justify-around my-6 '>

                  <li>Copyright © 2022 Dine Market</li>

                  <li> <span>Design by.</span>
                      <span className='font-bold text-xl'> Muazam Mughal</span>
                  </li>
                  <li> <span>Code by.</span>
                      <span className='font-bold text-xl'> Muazam Mughal</span><span className='font-bold'> on github</span>
                  </li>

              </ul>


          </div>


    </div>
  )
}

export default EndFooter