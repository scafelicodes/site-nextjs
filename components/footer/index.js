import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h3>Vamos criar um projeto juntos?</h3>
        {/* <p>Eu posso ajudar o seu projeto desde a engenharia ao lançamento</p> */}
        <Link href="/contato">
          <a className="main-link">Fale conosco</a>
        </Link>

        <p className="credits">© Scafeli 2022, Itaboraí - Rio de Janeiro</p>
      </div>
    </footer>
  );
}
