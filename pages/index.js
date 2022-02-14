import Header from "./../components/header";
import Footer from "./../components/footer";
import Hero from "./../components/hero";

import Link from "next/dist/client/link";

import ProjectsList from "../components/projects";

export default function Index() {
  return (
    <>
      <Header />
      <Hero />

      <section className="presentation">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <p>Quem somos</p>
              <h1>
                Tecnologia, inovação e criatividade em estratégias focadas nos
                seus objetivos de negócio.
              </h1>
            </div>

            <div className="col-md-3">
              <p>O que fazemos</p>

              <ul>
                <li>
                  <Link href="/servicos">
                    <a>Produção de Conteúdo</a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicos">
                    <a>Gestão de Redes Sociais</a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicos">
                    <a>Criação de sites e lojas virtuais</a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicos">
                    <a>Lançamento de Produtos Digitais</a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicos">
                    <a>Fotos e vídeos para e-commerce</a>
                  </Link>
                </li>
                <li>
                  <Link href="/servicos">
                    <a>Produção Audiovisual</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProjectsList />

      <Footer />
    </>
  );
}
