import bannerImg from "assets/img/project01.jpg"
import Link from "next/link";
export default function projectsList() {
    return (
        <>
            <div className="banner max-h-[50vh] h-[50vh] bg-fixed bg-bottom-center bg-no-repeat bg-cover overflow-hidden" style={{backgroundImage: `url(${bannerImg.src})`}} ></div>


            <div className="container mt-[100px]">
                <h2 className="mb-10">Gide - Blog sur l’actualité juridique et fiscale du secteur immobilier.</h2>
                <p className="w-4/5">
                    Un blog sur wordpress, les clients ont demandé une refonte graphique. Le directeur artistique à
                    alors réalisé une nouvelle maquette que j’ai par la suite intégré côté front.

                    Pour se qui est du back j’ai crée un nouveau type de post “évènements”
                    où les clients sont en mesure d’ajouter des évènements en passant par le back office.
                    Il y a aussi eu la création des “articles du mois”. Permettant au contributeur de faire ressortir un
                    article avec le contour violet (voir screen) pour signaler que c’est une article du mois.
                </p>
            </div>

            <div className="text-center mt-[100px] mb-[100px] ">
                <Link href="/projects-list">BACK</Link>
            </div>
        </>
    )
}