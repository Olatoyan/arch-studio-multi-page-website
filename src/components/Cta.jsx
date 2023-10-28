import { Link } from "react-router-dom";

function Cta({ children, to }) {
  return (
    <Link
      className="bg-very-dark-blue flex items-center justify-start w-max py-10 px-14 gap-8 cursor-pointer hover:bg-dark-grey transition-all duration-300"
      to={to}
    >
      {children}
    </Link>
  );
}

export default Cta;
