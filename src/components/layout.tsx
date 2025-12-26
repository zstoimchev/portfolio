import Navbar from './navbar';
import Footer from './footer';
import { Fragment, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Fragment>
            {/*<Navbar />*/}
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow content">
                    {children}
                </main>
                {/*<Footer />*/}
            </div>
        </Fragment>
    );
}
