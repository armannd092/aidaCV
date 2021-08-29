import '../src/styles/globals.css'
import Head from 'next/head'
import Layout from '../src/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Aida Najari</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </>
    )
}
export default MyApp