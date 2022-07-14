import Head from "next/head";
import Link from "next/dist/client/link";

import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";
import About from "./../components/about";

import ProjectsList from "../components/projects";
import Instafeed from "../components/instafeed";
import Process from "../components/process";

import Carousel from "react-elastic-carousel";
import HeroHome from "../components/hero-home";

export default function Index() {
  const breakPoints = [{ width: 1200, itemsToShow: 4 }];

  return (
    <>
      <Head>
        <title>Scafeli — Agência de Marketing e Publicidade</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Agência de marketing especializada na criação e promoção de marcas."
        />
        <meta
          name="keywords"
          content="publicidade, agência, itaboraí, rj, marketing, design, fotografia, social media"
        />
        <meta name="author" content="Scafeli" />
      </Head>
      <Header />

      {/* <Process /> */}

      <HeroHome />

      <Footer />
    </>
  );
}
