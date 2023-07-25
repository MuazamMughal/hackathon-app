import Hero from '@/views/Hero'
import Image from 'next/image'
import Productlist from '@/views/Productlist'
import Promotions from '@/views/Promotions'
import Jewellery from '@/views/Jewellery'
import NewsLatter from '@/views/NewsLatter'


export default function Home() {
  return (
 
   <div>
    <Hero/>
    <Promotions/>
    
    <Productlist/>
    <Jewellery/>
    <NewsLatter/>

   </div>
  )
}
