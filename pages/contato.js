import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";

import Header from "../components/header";

export default function Contato() {
  return (
    <div className="contato">
      <Head>
        <title>Contato — Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <div className="container contact-page">
        <div className="contact-content">
          <div>
            <h1>Vamos começar!</h1>
            <p>Nos conte mais sobre o seu projeto :)</p>
          </div>

          <form>
            <h4>Por favor, preencha o formulário</h4>
            <div className="form-group">
              <label htmlFor="nome">Nome*</label>
              <input type="text" className="form-control" id="nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="email">WhatsApp*</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Link do projeto</label>
              <input type="text" className="form-control" id="telefone" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem*</label>
              <textarea
                className="form-control"
                id="mensagem"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="main-link">
              Enviar mensagem <i className="gg-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
