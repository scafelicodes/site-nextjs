export default function About() {
  return (
    <div className="container">
      <span>Sobre</span>

      <p>
        Apaixonado por tecnologia desde 1990, ingressei na área de
        desenvolvimento web em 2008. Alguns anos depois, em 2015, me formei em
        Matemática Aplicada pela Universidade Federal do Rio de Janeiro.
        Atualmente, estou cursando Análise e Desenvolvimento de Sistemas pela
        Universidade Estácio de Sá.
      </p>
      <div className="row" id="servicos">
        <div className="col-md-4">
          <h4>Habilidades</h4>
          <ul>
            <li>+5 years</li>
            <li>+5 years</li>
            <li>+5 years</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h4>Certificações</h4>
          <ul>
            <li>+5 years</li>
            <li>+5 years</li>
            <li>+5 years</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h4>Interesses</h4>

          <h6>Scripting languages</h6>
          <p>PHP, JS, Bash, Python</p>
        </div>
      </div>
    </div>
  );
}
