import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div data-aos="fade">
            <h1>Um pouco sobre mim</h1>
            <p>
              Passionate about technology since 1990, I joined the web
              development area in 2008. A few years later, in 2015, I graduated
              in Applied Mathematics at the Federal University of Rio de
              Janeiro. I am currently studying Systems Analysis and Development
              at Universidade Estácio de Sá.
            </p>

            <a className="classic__link" href="/about">
              Leia mais <FiArrowRight />
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <img
            className="about__img"
            src="https://images.unsplash.com/photo-1565630916779-e303be97b6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
}
