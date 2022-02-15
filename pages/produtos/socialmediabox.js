import Header from "../../components/header";
import Footer from "../../components/footer";

export default function SocialMediaBox() {
  return (
    <div className="socialmediabox">
      {/* <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Obrigado!</h1>
            <p>
              Vamos analisar as informações enviadas no formulário e
              retornaremos o quanto antes!
            </p>
          </div>
        </div>
      </div> */}

      <section>
        <div className="container">
          <div className="row">
            <h1>Quem faz?</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h1>O que você vai receber</h1>
            </div>
            <div className="col-md-4">
              <h2>+100 artes</h2>
              <p>
                Ao se tornar assinante, você recebe todos os meses caixas
                virtuais surpresa, repleta de materiais e ferramentas que vão
                elevar suas habilidades profissionais
              </p>
            </div>
            <div className="col-md-4">
              <h2>+100 artes</h2>
              <p>
                Ao se tornar assinante, você recebe todos os meses caixas
                virtuais surpresa, repleta de materiais e ferramentas que vão
                elevar suas habilidades profissionais
              </p>
            </div>
            <div className="col-md-4">
              <h2>+100 artes</h2>
              <p>
                Ao se tornar assinante, você recebe todos os meses caixas
                virtuais surpresa, repleta de materiais e ferramentas que vão
                elevar suas habilidades profissionais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
