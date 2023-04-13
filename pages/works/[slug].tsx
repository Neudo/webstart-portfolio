import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IWork} from "@/@types/work";
import * as process from "process";
import { ParsedUrlQuery } from 'querystring'
import Head from "next/head";

interface Props {
    work: IWork | null
}


const SingleWorkPage: NextPage<Props> = ({ work }) => {
    return (
        <>
            <Head>
                <title>Document</title>
            </Head>
            <h1>{work?.title ?? 'Pas de projet ! ok'}</h1>

        </>
    )
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

