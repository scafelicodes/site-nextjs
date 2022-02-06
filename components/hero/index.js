import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <p className="lead">Produtora • Agência de Publicidade</p>
            <h1>Scafeli</h1>

            <h3>
              Development of web applications for <b>startups</b> and{" "}
              <b>large companies</b>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
