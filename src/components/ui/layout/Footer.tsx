import Image from 'next/image'
import React from 'react'
import Logo from '/public/Logo.webp'
import { Twitter } from 'lucide-react'
import Link from 'next/link'
import { Facebook } from 'lucide-react'
import { Linkedin } from 'lucide-react'





const Footer = () => {
  return (
        <div>

            <div>
                <footer className=' lg:mx-32' >


                    {/*this is the main code */}
                    
                    <div className=" px-5 py-24 text-gray-600  justify-start  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        
                        
                        {/*very left logo side */}
                        
                        <div className=" flex flex-col gap-8 w-1/3 md:mx-0 text-left  lg:text-left  md:text-left">
                            <div className='w-64 '>
                                <Image src={Logo} alt='logo ' width={200} />
                            </div>
                            <p className="mt-2  text-gray-500">
                                Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                            </p>
                            <div className='flex flex-row justify-start  mr-full sm:justify-items-start  gap-6 '>
                               <Link href={''}> <Twitter className='text-black h-11 fill-black w-11 p-3 rounded-xl bg-neutral-100'/></Link>
                               <Link href={''}> <Facebook className='text-black h-11 w-11 p-3 fill-black rounded-xl bg-neutral-100'/></Link>
                               <Link href={''}> <Linkedin className='text-black h-11 w-11 p-3 rounded-xl fill-black bg-neutral-100'/></Link>

                            </div>

                            
                        </div>


                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10  text-left  lg:text-center  md:text-left">
                            <div className="lg:w-1/3 md:w-1/2 w-full  px-4">
                                <h2 className="title-font font-bold text-gray-700 tracking-widest text-xl mb-3">
                                Company
                                </h2>
                                <div className="list-none flex flex-col text-lg gap-4 mb-10">
                                    <li>
                                        <Link  href={""}  className="text-gray-600 ">About</Link>
                                    </li>
                                    <li>
                                        <Link  href={""} className="text-gray-600 ">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href={""}  className="text-gray-600 ">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={""}  className="text-gray-600 ">How it Works</Link>
                                    </li>
                                    <li>
                                        <Link  href={""} className="text-gray-600 ">Contact Us</Link>
                                    </li>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full  px-4">
                                <h2 className="title-font font-bold text-gray-700 tracking-widest text-xl mb-3">
                                Support
                                </h2>
                                <div className="list-none flex flex-col text-lg gap-4 mb-10">
                                    <li>
                                        <Link href={""}  className="text-gray-600 ">Support Carrer</Link>
                                    </li>
                                    <li>
                                        <Link  href={""} className="text-gray-600 ">24h Service</Link>
                                    </li>
                                    <li>
                                        <Link href={""}  className="text-gray-600 ">Quick Chat</Link>
                                    </li>
                                    
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full  px-4">
                                <h2 className="title-font font-bold text-gray-700 tracking-widest text-xl mb-3">
                                Contact
                                </h2>
                                <div className="list-none flex flex-col text-lg gap-4 mb-10">
                                    <li>
                                        <Link  href={""} className="text-gray-600 ">Whatsapp</Link>
                                    </li>
                                    <li>
                                        <Link href={""}  className="text-gray-600 ">Support 24h</Link>
                                    </li>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                </footer>

            </div>
        </div>
    )
}

export default Footer