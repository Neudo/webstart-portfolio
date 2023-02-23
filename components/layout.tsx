import HeaderComponent from "./header";
import {FC} from "react";
import SocialComponent from "@/components/social";

interface Props {
    children: JSX.Element
}

 const LayoutComponent: FC<Props> = ({ children }) => {
    return (
        <>

            <HeaderComponent/>
            <main>{children}</main>
            <SocialComponent/>

        </>
    )
}

export default LayoutComponent