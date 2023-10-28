import DesktopImg from "/contact/desktop/image-map.png";
import TabletImg from "/contact/tablet/image-map.png";
import MobileImg from "/contact/mobile/image-map.png";

function ContactMap() {
  return (
    <section className="mt-[16.3rem]">
      <picture>
        <source srcSet={MobileImg} media="(max-width: 37.5em)" />
        <source srcSet={TabletImg} media="(max-width: 56.25em)" />
        <img src={DesktopImg} alt="a picture of a map" className="w-full" />
      </picture>
    </section>
  );
}

export default ContactMap;
