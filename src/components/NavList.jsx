import NavLinks from "./NavLinks";

function NavList({ type }) {
  return (
    <ul className="flex items-center gap-24 mid:flex-col mid:gap-12">
      <NavLinks to="/portfolio" type={type}>
        Portfolio
      </NavLinks>
      <NavLinks to="/about" type={type}>
        About Us
      </NavLinks>
      <NavLinks to="/contact" type={type}>
        Contact
      </NavLinks>
    </ul>
  );
}

export default NavList;
