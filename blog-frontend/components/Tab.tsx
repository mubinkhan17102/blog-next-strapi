import { ICategory } from "../types"
import Link from "next/link"

interface IPropType{
    categories: IItems;
    name: string
}

interface IItems{
    items: ICategory[]
}

export default function Tab({ categories,name }: IPropType ){

    return(
        <div>
            <ul>
                {
                    categories.items.map(item=>{

                        const {id, attributes} = item;
                        const {Title,Slug} = attributes;

                        return(
                            <li key={id}>
                                <Link href="#">{Title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}