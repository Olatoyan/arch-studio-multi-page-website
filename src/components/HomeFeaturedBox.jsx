import { Link } from "react-router-dom";

function HomeFeaturedBox({ number, title, desktopImg, tabletImg, mobileImg }) {
  const isTablet = window.innerWidth <= 1000 && window.innerWidth >= 700;
  const isMobile = window.innerWidth < 700;

  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%), url(${
      isTablet ? tabletImg : isMobile ? mobileImg : desktopImg
    })`,
    backgroundPosition: "0px 0px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "100%",
  };

  return (
    <div
      className="flex flex-col items-end h-[60rem] bg-cover max:h-[24rem]"
      style={backgroundStyle}
    >
      <p className="text-[25rem] font-bold leading-[20rem] tracking-[-0.5rem] -mr-4 opacity-50 max:text-[20rem] mid:opacity-0">
        {number}
      </p>
      <div className="mt-auto self-start px-16 pb-16 mid:px-8">
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
