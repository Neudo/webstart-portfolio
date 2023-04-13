import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import {IWork} from "@/@types/work";
import {NextPage} from "next";
import SidebarComponent from "@/components/admin-component/sidebar";
import Link from "next/link";
import Router from 'next/router';
import {useSession} from "next-auth/react";



interface Request {
    data?: IWork[],
    error?: string,
    isLoading?: boolean
}


const Admin: NextPage = () => {
    const [data, setData] = useState<IWork[] | null>(null)
    const [isLoading, setLoading] = useState(false)


    const deleteWork = async (id: string) => {
        const workId = id
        const response = await fetch(`/api/works/${workId}`, {
            method: 'DELETE',
        })
        if(response.ok){
            Router.reload();
        }
    }

    useEffect(() => {
        setLoading(true)
        fetch('/api/works')
            .then((res) => res.json())
            .then((data) => {
                setData(data.works)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Chargement des donées ...</p>

    if(data) return (
        <>
            <div className="md:flex">


                <SidebarComponent></SidebarComponent>
                <div className="w-full md:w-1/2 mt-5 ">
                    {data.map(work => (
                        <div key={work._id} className="card-work flex bg-black p-3.5 mb-5 justify-between">
                            <div className="flex items-center w-full">
                                <h4 className="w-1/2">{work.title}</h4>
                                <div className="actions">
                                    <Link className="text-orange-400 mr-2" href={`/admin/works/${work._id}`}>Voir / Modifier</Link>
                                    <button className="text-red-700" onClick={() => deleteWork(work._id)}> supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
    return <h1>Erreur </h1>
}


export default Admin