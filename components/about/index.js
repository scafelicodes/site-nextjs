import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="content" data-aos="fade" data-aos-duration="1000">
          <img className="img-about-cmp" src="gustavo-souza.jpg" />

          <div>
            <span>Who am I</span>
            <h1>
              Gustavo Scafeli
              <br /> <small>Front-end Engineer</small>
            </h1>
            <p>
              Matemático, Analista de Sistemas e Front-end Engineer. Possui mais
              de 12 anos de experiência na construção e lançamento de aplicações
              digitais.
            </p>

            <div>
              <a href="#">Instagram</a> • <a href="#">Github</a> •{" "}
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
