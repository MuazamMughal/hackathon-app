import React from 'react'
import Productcard from './Productcard'


const Productlist = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-col justify-center items-center '>
        <p className='  text-sm font-bold tracking-widest text-blue-600 '> PRODUCTS</p>
        <h1 className=' py-4 scroll-m-20  text-4xl font-bold tracking-wider transition-colors first:mt-0'>Check What We Have</h1>
      </div>
      <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>4</h3></div>
  <div><h3>5</h3></div>
  <div><h3>6</h3></div>
</div>
      


    </div>
  )
}

export default Productlist