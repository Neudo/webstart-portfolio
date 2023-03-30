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
                        <div className="item-project flex relative mb-5 ">

                            <Link href="/project-details" className="wrapper-img w-3/4 filter-img ">
                                <div className="max-w-[1000px] max-h-[400px] overflow-hidden " ><CldImage
                                    width="900"
                                    height="400"
                                    src={work.coverImage} alt="alt"></CldImage>
                                </div>
                            </Link>
                            <div className="ml-5 project-text">
                                <h2 className=""key={work._id}> {work.title}</h2>
                                <p className="bg-lightBlueSecondary-0 p-5 max-w-10 absolute top-10vh right-0 w-2/5 " key={work._id}>
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