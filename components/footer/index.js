import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h3>Vamos criar um projeto juntos?</h3>
        <Link href="/contact">
          <a>Vamos lá</a>
        </Link>
      </div>
    </footer>
  );
}
