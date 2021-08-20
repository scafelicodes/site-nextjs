import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";

import { DefaultSeo } from "next-seo";
import SEO from "./next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Scafeli - Produtora de Conteúdos Digitais</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
