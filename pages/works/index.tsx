import {GetStaticProps, NextPage} from "next";
import {IWork} from "@/@types/work";
import * as process from "process";
import ProjectComponent from "@/components/project-component/project";
import Link from "next/link";
import imgProject from "@/assets/img/project01.jpg";
import { CldImage } from 'next-cloudinary';


interface Props {
    works : IWork[] | null
}


export const getStaticProps: GetStaticProps = async () =>
{
    try {
        const response = await fetch(`${process.env.URL}/api/works`)
        const json = await response.json()
        const {works} = json

        return {
            props: {works},
        }
    } catch {
        return {
            props: {works: null},
        }
    }
}

const WorksPage: NextPage<Props> = ({works}) => {
    // @ts-ignore
    return (
        <>

            <div className="container mt-20">
                {works?.map((work) => (
                    <>
                        <div className="item-project md:border-none border border-white-400 flex flex-col md:flex-row relative md:mb-5 mb-20   ">
                            <Link href={`/works/${work.slug}`} className="wrapper-img w-full md:w-3/4 filter-img ">
                                <div className="md:max-w-[1000px] md:max-h-[400px] overflow-hidden " ><CldImage
                                    width="900"
                                    height="400"
                                    src={work.coverImage} alt={work.title}></CldImage>
                                </div>
                            </Link>
                            <div className="md:ml-5 project-text">
                                <Link href={`/works/${work.slug}`}>
                                    <h2 className="mb-2 mt-8 text-center"key={work._id}> {work.title}</h2>
                                </Link>
                                <p className="bg-lightBlueSecondary-0 p-5 md:max-w-10 md:absolute top-10vh right-0 w-full md:w-2/5 " key={work._id}>
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    </>
                )) }

            </div>
        </>
    )
}

export default WorksPage