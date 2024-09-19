import "@/styles/globals.css";
import "@/styles/nav.css";
import type {AppProps} from "next/app";
import Layout from "@/components/layout";
import localFont from "next/font/local";

const pixelated = localFont({
    src: "./fonts/VT323-Regular.ttf",
    variable: "--font-vt323-regular",
    weight: "100 400 900",
});

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={`${pixelated.variable}`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
