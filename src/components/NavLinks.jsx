import { NavLink } from "react-router-dom";

function NavLinks({ children, to }) {
  return (
    <NavLink
      className="text-[1.8rem] font-bold leading-10 text-medium-grey hover:text-very-dark-blue cursor-pointer"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavLinks;
