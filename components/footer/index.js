import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h3>Fácil de entender, impossível de ignorar.</h3>

        <a
          target="_blank"
          className="main-link"
          href="https://bit.ly/orcamentoscafeli"
        >
          Fale conosco
        </a>

        <p className="credits">©Scafeli 2022. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
