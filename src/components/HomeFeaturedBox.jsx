import { Link } from "react-router-dom";

function HomeFeaturedBox({ number, title, desktopImg, tabletImg, mobileImg }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%), url(${desktopImg})`,
    backgroundPosition: "0px 0px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="flex flex-col items-end h-[60rem] bg-cover"
      style={backgroundStyle}
    >
      <p className="text-[25rem] font-bold leading-[20rem] tracking-[-0.5rem] -mr-4 opacity-50 ">
        {number}
      </p>
      <div className="mt-auto self-start px-16 pb-16">
        <h3 className="text-[3.2rem] font-bold leading-[4rem] ">{title}</h3>
        <Link
          className="text-[1.8rem] font-medium leading-[2.4rem] opacity-75"
          to="/portfolio"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default HomeFeaturedBox;
