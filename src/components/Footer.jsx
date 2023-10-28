import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";
import Cta from "./Cta";
import NavList from "./NavList";
function Footer() {
  return (
    <footer className="flex items-center mt-80">
      <Link
        className="h-[18rem] w-[18rem] bg-very-dark-blue flex justify-center items-center"
        to="/"
      >
        <img src="/footer-logo.svg" alt="logo" />
      </Link>
      <nav className="flex items-center w-[75%] h-[18rem] bg-very-light-grey pl-36">
        <NavList />
        <div className="ml-auto mr-[-13rem]">
          <Cta to="/portfolio">
            <button className=" text-[1.8rem] font-bold leading-[2.5rem]">
              See Our Portfolio
            </button>
            <ArrowIcon />
          </Cta>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
