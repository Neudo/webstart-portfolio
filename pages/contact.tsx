import Head from 'next/head'
import { Inter } from '@next/font/google'
import HeaderComponent from "@/components/header";
import SocialComponent from "@/components/social";
import AboutComponent from "@/components/about-component/about";
import {ReactElement} from "react";
import LayoutComponent from "@/components/layout";
import ContactComponent from "@/components/contact-component";
// import {NextPageWithLayout} from "@/pages/_app";

const inter = Inter({ subsets: ['latin'] })

const Page = () => {
    return (
        <>
            <ContactComponent/>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutComponent>{page}</LayoutComponent>
    )
}

export default Page