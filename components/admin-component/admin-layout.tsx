import {FC} from "react";
import {SessionProvider} from 'next-auth/react'
interface Props {
    children: JSX.Element
}

const AdminLayout: ({children}: { children: any }) => void = ({ children }) => {
    <SessionProvider>{children}</SessionProvider>
}

export default AdminLayout