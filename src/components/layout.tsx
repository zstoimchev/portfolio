import Navbar from './navbar'
import Footer from './footer'
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children } : LayoutProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/*<Footer />*/}
        </>
    )
}