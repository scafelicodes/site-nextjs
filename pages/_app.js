import { useEffect } from "react";
import Head from "next/head";
import "../styles/global.scss";
import "../styles/responsive.scss";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>

        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        ></script>

        <title>Gustavo Scafeli – Software Engineer</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
