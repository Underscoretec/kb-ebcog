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
      <title>European Board & College of Obstetrics and Gynaecology conducts Diploma courses first time</title>
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

      <meta property="og:site_name" content="European Board & College of Obstetrics and Gynaecology conducts Diploma courses first time" />
      <meta property="og:title" content="European Board & College of Obstetrics and Gynaecology conducts Diploma courses first time" />
      <meta property="og:description"
        content="Join us to advance your career through knowledge and skill enhancement. Benefit from comprehensive training and unwavering support from our esteemed EBCOG faculty. You'll be fully equipped to tackle challenges and embrace the opportunities to enhance outcomes in women's health"
      />
      <meta property="og:image" content="/EBCOG_OGP.webp" />
      <meta name="twitter:image" content="/EBCOG_OGP.webp" />
      <meta name="twitter:site"
        content="Join us to advance your career through knowledge and skill enhancement. Benefit from comprehensive training and unwavering support from our esteemed EBCOG faculty. You'll be fully equipped to tackle challenges and embrace the opportunities to enhance outcomes in women's health"
      />
        <meta name="twitter:card" content="/EBCOG_OGP.webp" />
    </Head>

    {getLayout ?
      getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}

  </>)
    ;
}