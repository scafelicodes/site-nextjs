import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <h1>HELLO WORLD!</h1>
        <p>Engenheiro de Software, Hacker Ético e Criador de Conteúdo.</p>

        <img src="https://images.unsplash.com/photo-1606127195437-d12564b184e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
        {/* <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/axH_n9y7aMA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> */}
      </Container>
    </section>
  );
}
