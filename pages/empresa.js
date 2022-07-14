import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="contato">
      <Header />

      <Head>
        <title>Scafeli: Conheça mais sobre a nossa história</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="about-page">
        <div className="container" data-aos="fade" data-aos-duration="1000">
          <h1 style={{ marginBottom: "30px" }}>
            Fácil de entender, <br />
            impossível de ignorar.
          </h1>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="about.jpg" />
            </div>
            <div
              className="col-md-6  about-content"
              data-aos="fade"
              data-aos-duration="1000"
            >
              <h1>Sobre nós</h1>

              <p>
                Desde 2014, trabalhamos com a produção de conteúdo para marcas e
                profissionais de todas as áreas. Nossa missão é criar
                experiências, não anúncios.
              </p>

              <p>
                Somos uma agência 360°. Entregamos conteúdos, produções
                audiovisuais, gestão de redes sociais, lojas virtuais, marketing
                de influência, anúncios patrocinados e muito mais.
              </p>

              <div className="links-about">
                <p>
                  <Link href="/servicos">
                    <a>
                      <i class="fa-solid fa-chevron-right"></i> Veja como
                      fazemos
                    </a>
                  </Link>
                </p>

                <p>
                  <Link href="/trabalhos">
                    <a>
                      <i class="fa-solid fa-chevron-right"></i> Conheça o nosso
                      trabalho
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
