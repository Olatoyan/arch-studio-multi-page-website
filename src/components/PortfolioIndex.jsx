import { PortfolioDetails } from "../contexts/HomeContext";
import PortfolioBox from "./PortfolioBox";

function PortfolioIndex() {
  console.log(PortfolioDetails);
  return (
    <section className="grid grid-cols-3 gap-12">
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
