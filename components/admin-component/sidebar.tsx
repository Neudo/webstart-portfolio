import {FC} from "react";
import Link from "next/link";
import {signOut, useSession} from 'next-auth/react'

const SidebarComponent: FC = () =>
{
    const  {data} = useSession()

    return(
        <div className="sidebar w-full md:w-1/4 bg-lightBlueSecondary-0 p-5 mr-5 md:h-screen ">
            <ul>
                <li>Bonjour, {data?.user?.name}</li>
                <li><button onClick={()=>signOut()}>Se déconnecter </button></li>
                <li><Link target="_blank" href="/">Voir le site</Link></li>
                <li><Link href="/admin/works">Liste des Works</Link></li>
                <li><Link href="/admin/works/create">Ajouter un Work</Link></li>
            </ul>
        </div>
    )

}


export default SidebarComponent