import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <h1>I'm not a robot</h1>
        <p>Engenheiro de Software, Fotógrafo e Empreendedor.</p>

        <img src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" />
      </Container>
    </section>
  );
}
