import Header from "../components/header";
import Footer from "../components/footer";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="contato">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>About</h1>
          </div>
        </div>

        <div className="row">
          <div className="skills">
            <div>
              <h4>Experience</h4>

              <ul>
                <li>5+ years of experience React</li>
                <li>12+ years of experience as a web developer</li>
              </ul>
            </div>

            <div>
              <h4>Skills</h4>
              <ul>
                <li>React • Vue • Next.js • Gatsby</li>
                <li>WordPress • WooCommerce • PHP & SQL</li>
                <li>Javascript ES6 • Git • HTML & CSS</li>
                <li>TypeScript • SCSS (Sass and Less) • HTML & CSS</li>
                <li>Testers (Karma, Jasmine and Jest)</li>
              </ul>

              <h4>Tools</h4>
              <ul>
                <li>Tailwind • Bootstrap • Ant Design</li>
                <li>WordPress • WooCommerce</li>
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
            <Link href="/about">
              <a className="classic__link">
                Complete Resume <FiArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
