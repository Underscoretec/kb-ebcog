import '@/styles/globals.css'
import { NextPageWithLayout } from '@/types/types';
import type { AppProps } from 'next/app'
import Head from "next/head";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (<>
    <Head>
      {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.svg"
        /> */}
      <title>KB-EBCOG</title>
      <meta
        name="EBCOG"
        content="EBCOG "
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico" />
      <meta property="og:title" content="EBCOG" key="title" />
      <meta property="og:description" content="YOUR PATHWAY TO MAKING A DIFFERENCE" key="title" />
      <meta property="og:image" content="/favicon.ico" key="title" />
      <meta name="twitter:image" content="/favicon.ico" key="title" />
    </Head>
    {getLayout ?
      getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}

  </>)
    ;
}