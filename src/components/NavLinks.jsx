import { NavLink } from "react-router-dom";
import { useHome } from "../contexts/HomeContext";

function NavLinks({ children, to, type }) {
  const { dispatch } = useHome();

  const handleMenuToggle = () => {
    dispatch({ type: "toggleMenu" });
  };
  return (
    <NavLink
      className={`text-[1.8rem] font-bold leading-10 text-medium-grey hover:text-very-dark-blue cursor-pointer ${
        type === "header"
          ? "mid:text-[3.2rem] mid:text-very-dark-blue mid:leading-[4rem]"
          : "text-[1.8rem]"
      }`}
      to={to}
      onClick={`${type === "header" ? handleMenuToggle : ""}`}
    >
      {children}
    </NavLink>
  );
}

export default NavLinks;
