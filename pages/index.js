import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";
import About from "./../components/about";

import Link from "next/dist/client/link";

import ProjectsList from "../components/projects";
import Instafeed from "../components/instafeed";

export default function Index() {
  return (
    <>
      <Header />

      <div className="hero container">
        <h1>
          Desenvolvedor Frontend especializado em ReactJS, React Native e
          JavaScript.
        </h1>

        <Link href="/">
          <a>Solicitar proposta</a>
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
