export default function admin() {
    return (
        <>
            <div className="container flex">
                <div className="sidebar w-1/5 bg-lightBlueSecondary-0 p-5 mr-5 h-screen ">
                    <ul>
                    <li><a href="#">Liste des Works</a></li>
                    <li><a href="#">Ajouter un Work</a></li>
                    <li></li>
                </ul>
                </div>
                <div className="w-1/2">
                    <div className="card-work flex bg-black p-3.5 mb-5 justify-between">
                        <h4 className="w-1/2">Titre du work</h4>
                        <div className="actions">
                            <a className="text-green-500 mr-2" href="#">Modifier</a>
                            <a className="text-red-700" href="#">Supprimer</a>
                        </div>

                    </div>

                    <div className="card-work flex bg-black p-3.5 mb-5 justify-between">
                        <h4 className="w-1/2">Titre du work</h4>
                        <div className="actions">
                            <a className="text-green-500 mr-2" href="#">Modifier</a>
                            <a className="text-red-700" href="#">Supprimer</a>
                        </div>

                    </div>

                    <div className="card-work flex bg-black p-3.5 mb-5 justify-between">
                        <h4 className="w-1/2">Titre du work</h4>
                        <div className="actions">
                            <a className="text-green-500 mr-2" href="#">Modifier</a>
                            <a className="text-red-700" href="#">Supprimer</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}