import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <Container className="text-center">
          <img className="logo-header" src="logo-scafeli-white.svg" />
          <p>Produtora de Conteúdos Digitais</p>
        </Container>
      </header>
    </>
  );
}
