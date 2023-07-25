import { StaticImageData } from "next/image";

export type Product={
    id : number;
    name: string;
    ptype :string
    price : string;
    category : string;
    image : string | StaticImageData;

}