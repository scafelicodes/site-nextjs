import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <h4>Gustavo Scafeli</h4>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gustavoscafeli/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/gustavoscafeli" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gustavoscafeli/" target="_blank">
              instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
