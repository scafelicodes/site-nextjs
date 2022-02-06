import Header from "../../components/header";
import Footer from "../../components/footer";

import ProjectsList from "../../components/projects";

export default function Projetos() {
  return (
    <div className="projetos">
      <Header />

      <section className="header__projects">
        <video
          // onMouseOver={(event) => event.target.play()}
          // onMouseOut={(event) => event.target.pause()}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-photo-session-with-a-girl-in-the-middle-of-a-34397-large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <ul>
                <li>MCP Performance</li>
                <li>Residencial do Marquês</li>
                <li>BHappFit</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>Attech Sea</li>
                <li>Big Brain Education</li>
                <li>Martinica Digital</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>Universidade Federal do Rio de Janeiro</li>
                <li>Evoke Beachwear</li>
                <li>Residencial do Marquês</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProjectsList />

      <Footer />
    </div>
  );
}
