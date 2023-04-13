import {FC} from "react";
import Link from "next/link";




const AboutComponent: FC = () =>
    (
        <div className="container">
            <div className="wrapper-text w-full md:w-1/2 m-auto mb-20">
                <h2 className="mb-7">À propos</h2>
                <p>
                    Curieux, rigoureux, et motivé par l’envie d’apprendre et de relever des défis Intégrer une école proposant l’alternance était pour moi une priorité. L’école Webstart fut mon choix. Dans le but de devenir développeur front end, j’ai choisi la formation de Développeur Web et mobile et ai validé ma première année.
                    Malheureusement, à cause de la pandemie, l’école ne propose une entrée en deuxième année <br/> <br/> qu’en 2022. C’est pourquoi à partir de la rentrée 2021, je vais integrer la formation WEB DESIGN.

                </p>
            </div>


            <div className="wrapper-text w-full md:w-1/2 m-auto mb-20">
                <h2 className="mb-7">MON PARCOURS</h2>
                <p>
                    Après cinq ans passés dans l’armée de terre, j’ai fait le choix de me reconvertir. J’ai d’abord
                    essayé de créer un site à l’aide de Wordpress mais très vite je me suis senti limité et ai eu envie
                    de plus de libertés. <br/>
                    C’est alors que je me suis intéressé au code. J’ai d’abord suivi des cours sur Open Classrooms et
                    Udemy. Dans un premier temps c’était plutôt par passion, un loisir, mais très vite j’ai réalisé que
                    je souhaitais en faire mon métier !
                </p>
            </div>

            <div className="wrapper-text w-full md:w-1/2 sm:5/6 m-auto">
                <h2 className="mb-7">Compétences</h2>

                <div className="wrapper-skills flex pb-20 flex-wrap justify-between ">
                    <div className="w-32 bg-lightBlue-0 p-5 shadow-2xl mt-2 ">
                        <ul>
                            <li>Js</li>
                            <li>Gsap</li>
                            <li>NodeJS</li>
                            <li>VueJS</li>
                        </ul>
                    </div>
                    <div className="w-32 bg-darkBlue-0 p-5 shadow-2xl mt-2">
                        <ul>
                            <li>PHP</li>
                            <li>Wordpress</li>
                            <li>Drupal</li>
                        </ul>
                    </div>
                    <div className="w-32 bg-lightBlueSecondary-0 p-5 shadow-2xl mt-2 ">
                        <ul>
                            <li>Figma</li>
                            <li>Adobe XD</li>
                            <li>Sketch</li>
                            <li>Illustrator</li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className="wrapper-cta mb-[180px]">
                <Link href="/works" className="cta">Projets séléctionnés </Link>
            </div>

        </div>

    )

export default AboutComponent