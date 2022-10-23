import { ICategory } from "../types"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

interface IPropType{
    categories: IItems;
    name: string
}

interface IItems{
    items: ICategory[]
}

export default function Tab({ categories,name }: IPropType ){

    const route = useRouter()

    const handleOnSearch = (value: string)=>{
        console.log(value)
    }

    return(
        <div className=" m-8 flex items-center justify-between border-b-2">
            <ul className=" flex items-center">
                <li className={`
                    mr-6 pb-6 border-b-4 rounded-sm 
                     ${
                        route.pathname === '/'
                        ?' border-primary text-primary'
                        : ' border-white text-gray-400'
                    }
                `}>
                    <Link href="#">Recent</Link>
                </li>
                {
                    categories.items.map(item=>{

                        const {id, attributes} = item;
                        const {Title,Slug} = attributes;

                        return(
                            <li key={id} className=" mr-6 pb-6 border-b-4 rounded-sm">
                                <Link href={`/categories/${Slug}`}>{Title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <input 
                type="text"
                placeholder="Search artical..."
                onChange={(e)=>handleOnSearch(e.target.value)}
                className='p-2 border-none outline-none'
            />
        </div>
    )
}