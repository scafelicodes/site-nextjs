import Head from "next/head";
import Link from "next/dist/client/link";

import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";
import About from "./../components/about";

import ProjectsList from "../components/projects";
import Instafeed from "../components/instafeed";
import Process from "../components/process";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Scafeli — Agência de Marketing, Social Media e Audiovisual
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Agência de marketing em Itaboraí especializada na criação e promoção de marcas."
        />
        <meta
          name="keywords"
          content="publicidade, agência, itaboraí, rj, marketing, design, fotografia, social media"
        />
        <meta name="author" content="Scafeli" />
      </Head>
      <Header />

      {/* <Process /> */}

      <section className="hello-home">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos="fade" data-aos-duration="1000" className="col-md-6">
              <p>Entregamos experiências, não anúncios.</p>

              <h3>
                Criamos parcerias para fornecer conteúdos incríveis e campanhas
                publicitárias com resultados reais.
              </h3>

              <p>
                Desde 2014, já são mais de 300 clientes atendidos em todo o
                mundo e mais de 1 bilhão de pessoas impactadas pelo nosso
                trabalho.
              </p>

              <p>É apenas o começo!</p>
            </div>
            <div className="col-md-6">
              <img src="/supreme-scafeli.png" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
