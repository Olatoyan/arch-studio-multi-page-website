import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";
import Cta from "./Cta";
import NavList from "./NavList";
function Footer() {
  return (
    <footer className="flex items-center mt-80 px-64 xmax:px-0 mid:flex-col mid:mt-40">
      <Link
        className="h-[18rem] w-[18rem] bg-very-dark-blue flex justify-center items-center max:h-[10rem] max:w-[10rem] p-8 mid:-mb-24 mid:z-[2]"
        to="/"
      >
        <img src="/footer-logo.svg" alt="logo" />
      </Link>
      <nav className="flex items-center w-[75%] h-[18rem] max:h-[10rem] bg-very-light-grey pl-36 mid:flex-col mid:h-auto mid:pl-0 mid:gap-12 mid:pt-40 mid:pb-12 mid:w-full">
        <NavList />
        <div className="ml-auto mr-[-13rem] mid:m-0">
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
