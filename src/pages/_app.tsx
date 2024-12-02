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
      <link rel="manifest" href="/favicon.ico" />
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta name="twitter:image" content="<generated>" />
      <meta name="twitter:image:type" content="<generated>" />
      <meta name="twitter:image:width" content="<generated>" />
      <meta name="twitter:image:height" content="<generated>" />
    </Head>
    {getLayout ?
      getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}

  </>)
    ;
}