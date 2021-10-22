import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <img src="/logo-gustavo-scafeli.svg" alt="logo" />

        <a href="#" className="btn__white">
          Simule um orçamento
        </a>
      </div>
    </section>
  );
}
