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
        <title>Sobre - Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="about-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1627735747011-b8d19caf7645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" />
            </div>
            <div className="col-md-6">
              <h1>Sobre nós</h1>
              <p>
                O Estúdio Scafeli nasceu do sonho do nosso fundador Gustavo
                Scafeli.
              </p>

              <p>
                Desde 2014, trabalhamos com a produção de conteúdo para marcas e
                profissionais de todas as áreas. Nossa missão é criar
                experiências, não anúncios.
              </p>

              <p>Siga o nosos trabalho:</p>

              <p>
                <a href="#">Nosso Instagram</a> <br />
                <a href="#">Fotos no Unsplash</a> <br />
                <a href="#">Portfólio no Behance</a> <br />
                <a href="#">Vídeos no Vimeo</a> <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
