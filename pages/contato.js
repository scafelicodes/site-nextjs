import Head from "next/head";
import Link from "next/link";

export default function Contato() {
  return (
    <div className="contato">
      <Head>
        <title>Contato | Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* <Header /> */}
      <div className="container contact-page">
        <div className="">
          {/* <iframe src="https://embed.lottiefiles.com/animation/23708"></iframe> */}

          <div className="animation-contact">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_jxvkesv2.json"
              // src="https://assets5.lottiefiles.com/packages/lf20_folnmvzi.json"
              background="transparent"
              speed="1"
              style={{ width: "200px", height: "200px" }}
              loop
              autoplay
            ></lottie-player>
          </div>

          <h1>Vamos criar um projeto juntos?</h1>
          <p>Me conte mais sobre o seu projeto :)</p>

          <form>
            <h4>Por favor, preencha o formulário</h4>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" className="form-control" id="nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Link do projeto</label>
              <input type="text" className="form-control" id="telefone" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
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

          <div className="footer-form-contact">
            <Link href="/">
              <a>
                <i className="gg-arrow-left"></i> Voltar ao site
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
