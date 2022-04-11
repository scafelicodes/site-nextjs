import Link from "next/link";

import { elastic as Menu } from "react-burger-menu";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Link href="/">
            <a className="logo-header">
              <img src="/logo-white.svg" alt="Logo" />
              {/* <div>
                <h3>Gustavo Scafeli</h3>
                <p>Software Engineer</p>
              </div> */}
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
    </>
  );
}
