import {FC} from "react";
import logo from "assets/img/logo.png"
import Link from "next/link";

const HeaderComponent: FC = () =>
    (
        <ul className="w-5/6 m-auto flex items-center justify-between" >
            <li><Link href="/projects-list">Projets</Link></li>
            <li><Link href="/"><img src={logo.src}/></Link></li>
            <li><Link href="#">Contactez-moi</Link></li>
        </ul>
    )

export default HeaderComponent