import { Container, Row, Col } from "react-bootstrap";

export default function Bio() {
  return (
    <div className="bio-page-scafeli">
      <Container className="bio">
        <div className="text-center">
          <img className="logo-header" src="logo-scafeli-white.svg" />
          <p>Produtora de Conteúdos Digitais ⚡</p>
        </div>

        <ul>
          <li>
            <a target="_blank" href="#">
              <i class="fab fa-whatsapp"></i> Solicite um orçamento
            </a>
          </li>

          <li>
            <a target="_blank" href="#">
              <i class="fas fa-mask"></i> Veja nossos últimos trabalhos
            </a>
          </li>

          <li>
            <a target="_blank" href="https://scafeli.com.br">
              <i class="fas fa-tv"></i> Conheça o nosso site
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://open.spotify.com/playlist/1pAw0anb2Ntp0cR5DJFpWf?si=6f0e4777ab8d464c"
            >
              <i class="fab fa-spotify"></i> Ouça a nossa playlist
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}
