import {FC} from "react";
import logo from "assets/img/logo.png"
import Link from "next/link";

const HeaderComponent: FC = () =>
    (
        <ul className="w-full px-2 md:w-5/6 m-auto flex items-center justify-between" >
            <li><Link href="/works">Projets</Link></li>
            <li><Link  href="/"><img className="w-3/5 m-auto md:w-full" src={logo.src}/></Link></li>
            <li><Link href="#">Contactez-moi</Link></li>
        </ul>
    )

export default HeaderComponent