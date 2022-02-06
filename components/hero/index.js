import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {/* <p className="lead">Produtora • Agência de Publicidade</p> */}
            {/* <h1>Scafeli</h1> */}

            <h3>
              Produção de Conteúdo e Tecnologia para <b>empresas criativas</b>.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
