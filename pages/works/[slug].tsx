import {FC} from "react";
import Link from "next/link";
import {GetStaticProps} from "next";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import * as process from "process";

// const getStaticProps: GetStaticProps = async (context) => {
//     const { slug }  = context.params as Params
//     const response = await.fetch(`${process.env.url}/api/works/${slug}`)
// }



const TestComponent: FC = () =>
    (
        <div className="container">
            <div className="wrapper-text w-1/2 m-auto">
                <h2 className="mb-7">Test</h2>
            </div>
        </div>

    )

export default TestComponent