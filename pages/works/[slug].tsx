import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IWork} from "@/@types/work";
import * as process from "process";
import { ParsedUrlQuery } from 'querystring'
import Head from "next/head";
import Link from "next/link";
import {CldImage} from "next-cloudinary";
import {useRouter} from "next/router";

interface Props {
    work: IWork | null
}


const SingleWorkPage: NextPage<Props> = ({ work }) => {
    const router = useRouter()
    if( work ){

    return (
        <>
            <Head>
                <title>Document</title>
            </Head>
            <div className="banner md:max-h-[50vh] md:h-[50vh] bg-fixed bg-bottom-center bg-no-repeat bg-cover overflow-hidden">
                <CldImage
                    width="900"
                    height="400"
                    src={work.coverImage} alt={work.title}></CldImage>
            </div>


            <div className="container mt-[100px]">
                <h2 className="mb-10">{work.title}</h2>

                <p className="w-4/5">
                    {work.description}
                </p>
            </div>

            <div className="text-center mt-[100px] mb-[100px] ">
                <Link href="/works">BACK</Link>
            </div>

        </>
    )
    } else {
        return (
              router.push('/404')
        )
    }

}

interface Params extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const { slug } = context.params as Params
        const response = await fetch(`${process.env.URL}/api/works/slug/${slug}`)
        const json = await response.json()
        const { work } = json
        return {
            props: {work}
        }
    } catch (error){
        console.log(error)
        return {
            props: {work: null}
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response = await fetch(`${process.env.URL}/api/works`)
        const json: {works?: IWork[] } = await response.json()
        const { works } = json

        if(!works) throw new Error('Pas de travaux !')

        const paths = works.map((work) => ({
            params: {
                slug: work.slug ?? undefined
            }
        }))
        return {
            paths,
            fallback: false,
        }

    } catch (error) {
        console.log('paths error : ', error)
        return {
            paths: [],
            fallback: false
        }
    }
}

export default SingleWorkPage

