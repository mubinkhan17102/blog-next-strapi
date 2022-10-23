import Link from "next/link"
import Image from "next/image"
import logo from '../public/logo.png';

const Navbar = ()=>{
    return(
        <nav className=" flex justify-between items-center py-7">
            <Link href="/">
                <div className=" cursor-pointer flex items-center content-center">
                    <Image src={logo} width={30} height={30}/>
                    <span className=" font-bold ml-2 text-primary">
                        Mubin's Blog
                    </span>
                </div>
            </Link>
            <div>
                <ul className=" flex ">
                    <li className=" px-4">
                        <Link href="/product">
                            Product
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/pricing">
                            Pricing
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/docs">
                            Docs
                        </Link>
                    </li>
                    <li className=" px-4">
                        <Link href="/company">
                            Company
                        </Link>
                    </li>
                </ul>                
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="px-4">
                        <Link href="/login">
                            Log In
                        </Link>
                    </li>
                    <li className="px-4 py-2 bg-primary cursor-pointer hover:bg-primary-dark transition-all">
                        <Link href="/about">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar