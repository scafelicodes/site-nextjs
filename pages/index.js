import Head from "next/head";
import Link from "next/dist/client/link";

import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";
import About from "./../components/about";

import ProjectsList from "../components/projects";
import Instafeed from "../components/instafeed";

export default function Index() {
  return (
    <>
      <Head>
        <title>Scafeli - Agência de Publicidade em Itaboraí, RJ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Agência de publicidade em Itaboraí especializada na criação e promoção de marcas."
        />
        <meta
          name="keywords"
          content="publicidade, agência, itaboraí, rj, marketing, design, fotografia, branding"
        />
        <meta name="author" content="Scafeli" />
      </Head>
      <Header />

      <div className="hero">
        <div className="container">
          {/* <h1 data-aos="fade" data-aos-duration="500">
            Scafeli
          </h1> */}

          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/StS5CJPE2UA?controls=0&mute=1&autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

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
              <img
                data-aos="fade-left"
                data-aos-duration="500"
                src="/supreme-scafeli.png"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
