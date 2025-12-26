import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Portfolio | Zhivko Stoimchev</title>
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}