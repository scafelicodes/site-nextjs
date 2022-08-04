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
        <title>Gustavo Scafeli — Front-end Engineer</title>
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

      <section className="numbers-home">
        <div>1,622</div>
        <div>3.222</div>
        <div>$091202</div>
        <div>3.1319</div>
      </section>

      <About />

      <section className="projects-slider">
        <div className="text-center">
          <span>Método validado</span>
          <h2>
            Dezenas de clientes estão aumentando <br />o faturamento com a ajuda
            da Scafeli
          </h2>
        </div>
        <div className="clients">
          <div className="clients-list">
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
            <img src="/showcase-5.jpg" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
