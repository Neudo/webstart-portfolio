import HeaderComponent from "./header";
import {FC} from "react";
import SocialComponent from "@/components/social";
import {useRouter} from "next/router";

interface Props {
    children: JSX.Element
}

 const LayoutComponent: FC<Props> = ({ children }) => {
    const { pathname } = useRouter()
     const adminPath = pathname.startsWith(`/admin`)

  if(adminPath) return (
      <main>{children}</main>

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