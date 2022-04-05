import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link href="/">
          <a className="logo-header">
            <img
              src="https://images.unsplash.com/profile-1648163079054-73b1ad95065fimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
              alt="Logo"
            />
            <div>
              <h3>Gustavo Scafeli</h3>
              <p>Software Engineer</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
