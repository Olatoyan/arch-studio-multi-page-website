import { Link } from "react-router-dom";
import NavList from "./NavList";
import { useHome } from "../contexts/HomeContext";

function Header() {
  const { dispatch, isMenuOpen } = useHome();

  const handleMenuToggle = () => {
    dispatch({ type: "toggleMenu" });
  };

  return (
    <header className="flex items-center gap-36 mb-24 px-64 xmax:px-44 tablet:px-32 mid:px-12  mid:justify-between mid:mb-0 z-20 mid:bg-white mid:py-6 mid:fixed mid:w-screen  mid:shadow-md">
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <nav
        className={`mid:absolute mid:top-[7rem] mid:bg-very-light-grey mid:z-[11] mid:w-[90%] mid:p-8 ${
          isMenuOpen
            ? "mid:opacity-100 mid:transition-all mid:duration-500  mid:translate-y-0 mid:visible"
            : "mid:opacity-0 mid:transition-all mid:duration-500  mid:translate-y-1/2 mid:invisible"
        }`}
      >
        <NavList type={"header"} />
      </nav>
      <div className="hidden mid:block" onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <img
            src="/icons/icon-close.svg"
            alt="close"
            className={isMenuOpen ? "rotate" : ""}
          />
        ) : (
          <img
            src="/icons/icon-hamburger.svg"
            alt="hamburger"
            className={!isMenuOpen ? "not-rotate" : ""}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
