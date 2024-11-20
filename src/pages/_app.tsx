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
      </Head>
     { getLayout ?
    getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}
   
    </>)
  ;
}