import Productcard from "@/views/Productcard"
import { Products } from "@/utils/mock"
import Image, { StaticImageData } from 'next/image'

const getProductByCategory = (category: string) => {
    return Products.filter((Product) => Product.category === category)

}

export default function Page({ params }: { params: { slug: string } }) 
{

    const result = getProductByCategory(params.slug);

    return <div className=" flex flex-wrap justify-center mt-6 gap-x-12 gap-y-16 ">


        {
            result.length > 0 ? result.map((Product) => (
                <Productcard
                    key={Product.id}
                    title={Product.name}
                    price={Product.price}
                    ptype={Product.ptype}
                    category={Product.category}
                    Img={Product.image as StaticImageData} />
            )): <p>No product Found</p>

        }



    </div>
}