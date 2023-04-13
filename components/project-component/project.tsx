import {FC} from "react";
import imgProject from "assets/img/project01.jpg"
import Link from "next/link";



const ProjectComponent: FC = () =>
    (
        <>
            <div className="item-project flex relative ">

                <Link href="/project-details" className="wrapper-img w-3/4 filter-img ">
                <div> <img src={imgProject.src} alt="{work.title}"/>
                </div>
                </Link>
                <div className="ml-5 project-text">
                    <h2 className="">Refonte blog Gide</h2>
                    <p className="bg-lightBlueSecondary-0 p-5 max-w-10 absolute top-10vh right-0 w-2/5 ">
                        Ajout d’une nouvelle catégorie “évènements” et intégration de la refonte graphique du site ainsi
                        que
                        de la newsletter.
                    </p>
                    <ul className="mt-40 flex">
                        <li>Php</li> /
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>

        </>
    )

export default ProjectComponent