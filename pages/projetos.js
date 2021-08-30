import Header from "./../components/header";
import Footer from "./../components/footer";

export default function Projetos() {
  return (
    <div className="projetos">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h1>Zappy</h1>
            <p className="lead">
              A melhor plataforma brasileira de divulgação e venda e produtos.
            </p>
            <a href="#">Saiba mais</a>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h1>adidas Superstar</h1>
            <p className="lead">
              Desenvolvido em Next.js, este é um site criado em comemoração aos
              50 anos do modelo Superstar da adidas, onde é possível encontrar a
              história da marca e a sua evolução.
            </p>
            <a href="#">Saiba mais</a>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h1>Quero Medicina</h1>
            <p className="lead">
              Uma plataforma complementar aos estudos dos vestibulandos de
              medicina de todo o Brasil.
            </p>
            <a href="#">Saiba mais</a>
          </div>
        </div>

        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h1>Anonimatta</h1>
            <p className="lead">
              Rede social com foco no compartilhamento de conteúdos criados por
              modelos e fotógrafos.
            </p>
            <a href="#">Saiba mais</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
