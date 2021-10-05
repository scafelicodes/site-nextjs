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

const Header = ({ router: { pathname } }) => (
  <header>
    <Container id="wrapper-navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {/* <img className="logo-header" src="logo-scafeli-white.svg" /> */}
            Gustavo Souza
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink path="/" label="Bio" pathname />
              <NavLink path="/projetos" label="Projetos" pathname />
              <NavLink path="/setup" label="Meu Setup" pathname />
            </Nav>

            <Nav className="ml-auto">
              <NavLink
                path="https://github.com/gustavoscafeli"
                label="Github"
                target="_blank"
              />

              <NavLink path="/contato" label="Contato" pathname />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  </header>
);

export default withRouter(Header);
