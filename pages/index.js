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
        <title>Scafeli </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="hero container">
        {/* <h1>
          <span>Engenheiro de Software</span> especializado em{" "}
          <span>ReactJS</span>, <span>NextJS</span> e <span>JavaScript</span>.
        </h1> */}

        <Link href="/contato">
          <a className="main-link">
            Entrar em contato <i className="gg-arrow-right"></i>
          </a>
        </Link>
      </div>

      {/* <About /> */}
      {/* <Hero /> */}
      <ProjectsList />

      {/* <Instafeed /> */}
      <Footer />
    </>
  );
}
