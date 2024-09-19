import Navbar from './navbar'
import {Fragment, ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children } : LayoutProps) {
    return (
        <Fragment>
            <Navbar/>
            <div>{children}</div>
        </Fragment>
    )
}