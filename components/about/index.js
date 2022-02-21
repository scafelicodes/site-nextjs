import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div data-aos="fade">
            <h1>About me</h1>
            <p>
              Passionate about technology since 1990, I joined the web
              development area in 2008. A few years later, in 2015, I graduated
              in Applied Mathematics at the Federal University of Rio de
              Janeiro. I am currently studying Systems Analysis and Development
              at Universidade Estácio de Sá.
            </p>

            <a className="classic__link" href="/about">
              View more <FiArrowRight />
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
      <div className="row">
        <div className="skills">
          <div>
            <h4>Experience</h4>

            <p>12+ years of experience as a web developer.</p>
          </div>

          <div>
            <h4>Skills</h4>
            <ul>
              <li>React • Next.js • Gatsby</li>
              <li>WordPress • WooCommerce • PHP & SQL</li>
              <li>Javascript ES6 • Git • HTML & CSS • PHP & SQL</li>
            </ul>
          </div>

          <div>
            <h4>Certifications</h4>
            <ul>
              <li>Google Analytics • Adsense</li>
              <li>+5 years</li>
              <li>+5 years</li>
            </ul>
          </div>
        </div>

        <div className="links">
          <a
            className="classic__link"
            href="https://www.linkedin.com/in/gustavoscafeli/"
            target="_blank"
          >
            LinkedIn Profile <FiArrowRight />
          </a>
          <a className="classic__link" href="#">
            Complete Resume <FiArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
