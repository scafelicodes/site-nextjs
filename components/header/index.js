import Link from "next/link";

import { elastic as Menu } from "react-burger-menu";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <Link href="/">
            <a className="logo-header">
              <img src="/logo-white.svg" alt="Logo" />
            </a>
          </Link>

          <Menu right>
            <Link href="/">
              <a id="home" className="menu-item">
                Home <i className="gg-arrow-right"></i>
              </a>
            </Link>

            <Link href="/sobre">
              <a id="about" className="menu-item">
                Sobre <i className="gg-arrow-right"></i>
              </a>
            </Link>

            <Link href="/blog">
              <a id="about" className="menu-item">
                Blog <i className="gg-arrow-right"></i>
              </a>
            </Link>

            <Link href="/contato">
              <a id="contact" className="menu-item">
                Contato <i className="gg-arrow-right"></i>
              </a>
            </Link>
          </Menu>
        </div>
      </div>

      <a href="#" className="whatsapp-link">
        Clique aqui para entrar em contato
      </a>

      <img src="awwwards.png" alt="awwwards" className="awwwards" />
    </>
  );
}
