import Link from "next/link";
import { withRouter } from "next/router";
import classNames from "classnames";
import { Container, Navbar, Nav } from "react-bootstrap";

export const NavLink = (props) => {
  let className = classNames({
    "nav-link": true,
    "is-active": props.pathname,
  });
  return (
    <Link href={props.path}>
      <a className={className}>{props.label}</a>
    </Link>
  );
};

const Header = () => (
  <header>
    <div className="container">
      <div className="header__content">
        <Link href="/">
          <a className="logo">Scafeli</a>
        </Link>

        <a
          className="contact__btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Orçamento
        </a>
      </div>
    </div>
  </header>
);

export default withRouter(Header);
