import Productcard from "@/views/Productcard"
import { Products } from "@/utils/mock"
import Image, { StaticImageData } from 'next/image'

const AllProducts = () => {
    return (
        <div className=" flex flex-wrap justify-center mt-6 gap-x-12 gap-y-16 ">
            {Products.map((Product) => (
                <Productcard
                key={Product.id}
                    title= {Product.name}
                     price= {Product.price}
                      ptype={Product.ptype}
                    
                     Img ={Product.image as StaticImageData} />
            )

            )}
            
            

        </div>
    )
}
export default AllProducts