import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {IWork} from "@/@types/work";
import {NextPage} from "next";


interface Request {
    data?: IWork[],
    error?: string,
    isLoading?: boolean
}


  const Admin: NextPage = () => {

    const [data, setData] = useState<IWork[] | null>(null)
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch('/api/works')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data.works)
                setLoading(false)
            })
    }, [])


    if (isLoading) return <p>Chargement des donées ...</p>

    if(data) return (
        <>
            <div className="flex">
                <div className="sidebar w-1/5 bg-lightBlueSecondary-0 p-5 mr-5 h-screen ">
                    <ul>
                    <li><a href="#">Liste des Works</a></li>
                    <li><a href="#">Ajouter un Work</a></li>
                    <li></li>
                </ul>
                </div>
                <div className="w-1/2">
                    {data.map(work => (
                        <div key={work._id} className="card-work flex bg-black p-3.5 mb-5 justify-between">
                            <h4 className="w-1/2">{work.title}</h4>
                            <div className="actions">
                                <a className="text-green-500 mr-2" href="#">Modifier</a>
                                <a className="text-red-700" href="#">Supprimer</a>
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