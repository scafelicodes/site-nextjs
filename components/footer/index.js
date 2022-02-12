import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="container">
          <p>Vamos trabalhar juntos?</p>
          <h1>contato@scafeli.com</h1>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Nosso time</li>
              <li>Contato</li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul>
              <li>Conteúdo</li>
              <li>Desenvolvimento</li>
              <li>Direção de Arte</li>
              <li>Branding</li>
              <li>Audiovisual</li>
            </ul>
          </div>

          <div className="col-md-4">
            Social
            <ul>
              <li>Instagram</li>
              <li>Behance</li>
              <li>Unsplash</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
