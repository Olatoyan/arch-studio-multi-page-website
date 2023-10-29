import { PortfolioDetails } from "../contexts/HomeContext";
import PortfolioBox from "./PortfolioBox";

function PortfolioIndex() {
  return (
    <section className="grid grid-cols-3 gap-12 px-64 xmax:px-44 xmax:grid-cols-1 tablet:px-32 mid:px-12 mid:pt-28">
      {PortfolioDetails.map((item) => (
        <PortfolioBox
          title={item.title}
          date={item.date}
          key={item.id}
          desktopImg={item.desktopImg}
          tabletImg={item.tabletImg}
          mobileImg={item.mobileImg}
        />
      ))}
    </section>
  );
}

export default PortfolioIndex;
