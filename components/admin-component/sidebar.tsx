import {FC} from "react";
import Link from "next/link";
const SidebarComponent: FC = () =>
    (
            <div className="sidebar w-1/5 bg-lightBlueSecondary-0 p-5 mr-5 h-screen ">
                <ul>
                    <li><Link target="_blank" href="/">Voir le site</Link></li>
                    <li><Link href="/admin/works">Liste des Works</Link></li>
                    <li><Link href="/admin/works/create">Ajouter un Work</Link></li>
                </ul>
            </div>
    )

export default SidebarComponent