import Image from "next/image"
import logo from '../public/logo.png'
export default function Footer(){
    return(
        <footer>
            <Image src={logo} width={40} height={40}/>
            <span>Mubin's blog</span>
        </footer>
    )
}