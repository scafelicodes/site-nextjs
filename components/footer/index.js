import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h3>Vamos criar um projeto juntos?</h3>
        <p>Eu posso ajudar o seu projeto desde a engenharia ao lançamento</p>
        <Link href="/contato">
          <a className="main-link">
            Entrar em contato <i className="gg-arrow-right"></i>
          </a>
        </Link>
      </div>
    </footer>
  );
}
