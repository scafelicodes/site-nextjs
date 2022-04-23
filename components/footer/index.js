import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h3>Fácil de entender, impossível de ignorar.</h3>
        <p>Vamos criar um projeto incrível juntos?</p>
        <Link href="/contato">
          <a className="main-link">Fale conosco</a>
        </Link>

        <p className="credits">©Scafeli 2022. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
