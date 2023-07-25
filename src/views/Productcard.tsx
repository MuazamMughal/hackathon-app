import React from 'react'
import Image, { StaticImageData } from 'next/image'

function Productcard(props: {
  title: string,
  price: string,
  ptype: string,
  Img: StaticImageData
  category? : string,
}) {
  return (

    <div className='font-bold flex  flex-col   gap-2  text-zinc-900 '>
      <Image src={props.Img} width={270} alt='products' />

      <h3 className='pt-4'> {props.title}</h3>
      <p className=' text-gray-400 font-bold text-normal'>{props.ptype}</p>
      <p className=' font-bold  text-xl'>{props.price}</p>
      {props.category}


    </div>

  )
}

export default Productcard