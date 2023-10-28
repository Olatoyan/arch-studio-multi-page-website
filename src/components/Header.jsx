import { Link } from "react-router-dom";
import NavList from "./NavList";

function Header() {
  return (
    <header className="flex items-center gap-36 mb-24">
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <nav>
        <NavList />
      </nav>
    </header>
  );
}

export default Header;
