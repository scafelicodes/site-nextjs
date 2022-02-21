import Header from "../components/header";
import Footer from "../components/footer";

export default function Obrigado() {
  return (
    <div className="contato">
      <Header />
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
      </div>

      <Footer />
    </div>
  );
}
