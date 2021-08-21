import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <h1>FCKNG CRTVE STDIO</h1>
        <p>
          Um estúdio de criação que atende as melhores empresas e pessoas do
          mundo desde 2014.
        </p>

        <img src="https://images.unsplash.com/photo-1621253081433-999009f17b4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
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
