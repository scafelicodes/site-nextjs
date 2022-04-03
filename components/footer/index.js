import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h3>Vamos criar um projeto juntos?</h3>
        <Link href="/solicitar-proposta">
          <a className="main-link">
            Solicitar proposta <i className="gg-arrow-right"></i>
          </a>
        </Link>
      </div>
    </footer>
  );
}
