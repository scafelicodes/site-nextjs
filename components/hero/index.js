import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Gustavo Scafeli</h1>
            <p className="lead">Software Engineer • Content Creator</p>

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
