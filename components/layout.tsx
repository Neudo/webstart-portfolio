import HeaderComponent from "./header";
import {FC} from "react";
import SocialComponent from "@/components/social";
import {useRouter} from "next/router";
import {SessionProvider} from "next-auth/react";

interface Props {
    children: JSX.Element
}

const LayoutComponent: FC<Props> = ({ children }) => {
    const { pathname } = useRouter()
    const adminPath = pathname.startsWith(`/admin`)

    if(adminPath) return (
        <SessionProvider>
            <main>{children}</main>
        </SessionProvider>

    )

    else return (
        <>
            <HeaderComponent/>
            <main>{children}</main>
            <SocialComponent/>
        </>
    )


}

export default LayoutComponent