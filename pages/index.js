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
        <title>Scafeli® - Agência de Publicidade em Itaboraí, RJ</title>
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
        <h1>
          Olá!
          {/* <img src="/stick-one.png" className="stick-hero" alt="sticker" /> */}
        </h1>

        <p>
          Nós somos a <b>Scafeli®</b> <br /> Agência de publicidade
          especializada na criação e promoção de marcas, partindo da
          combinanação de estratégia, experiência e criatividade.
        </p>
      </div>

      <section className="services-links">
        <div className="container">
          <h1>
            <Link href="#">
              <a>Fotografia</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Identidade visual</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Embalagem</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Marketing digital</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Design</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Audiovisual</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Eventos</a>
            </Link>{" "}
            <span>+</span>{" "}
            <Link href="#">
              <a>Criação de sites</a>
            </Link>
          </h1>
        </div>
      </section>

      {/* <About /> */}
      {/* <Hero /> */}
      <ProjectsList />

      {/* <Instafeed /> */}
      <Footer />
    </>
  );
}
