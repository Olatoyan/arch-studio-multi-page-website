import NavLinks from "./NavLinks";

function NavList() {
  return (
    <ul className="flex items-center gap-24">
      <NavLinks to="/portfolio">Portfolio</NavLinks>
      <NavLinks to="/about">About Us</NavLinks>
      <NavLinks to="/contact">Contact</NavLinks>
    </ul>
  );
}

export default NavList;
