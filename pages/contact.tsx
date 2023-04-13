import { Inter } from '@next/font/google'
import {ReactElement} from "react";
import LayoutComponent from "@/components/layout";
import ContactComponent from "@/components/contact-component";

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