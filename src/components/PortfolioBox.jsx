import useIntersectionObserver from "../hooks/useIntersectionObserver";

function PortfolioBox({ title, date, desktopImg, tabletImg, mobileImg }) {
  const { inViewRef, inView } = useIntersectionObserver();
  const isTablet = window.innerWidth <= 1000 && window.innerWidth >= 700;
  const isMobile = window.innerWidth < 700;

  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%), url(${
      isTablet ? tabletImg : isMobile ? mobileImg : desktopImg
    })`,
    backgroundPosition: "0px 0px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={`flex flex-col justify-end h-[56rem] bg-black px-16 pb-24 xmax:h-[24rem] mid:px-8 mid:pb-12  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
      style={backgroundStyle}
    >
      <h3 className="text-[3.2rem] font-bold leading-[4rem]">{title}</h3>
      <p className="text-[1.8rem] font-medium leading-[2.4rem] opacity-75">
        {date}
      </p>
    </div>
  );
}

export default PortfolioBox;
