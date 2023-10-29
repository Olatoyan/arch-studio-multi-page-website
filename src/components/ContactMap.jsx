import DesktopImg from "/contact/desktop/image-map.png";
import TabletImg from "/contact/tablet/image-map.png";
import MobileImg from "/contact/mobile/image-map.png";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function ContactMap() {
  const { inViewRef, inView } = useIntersectionObserver();
  return (
    <section
      className={`mt-[16.3rem] px-64 xmax:px-44 tablet:px-32 mid:px-0 mid:mt-40  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
    >
      <picture>
        <source srcSet={MobileImg} media="(max-width: 37.5em)" />
        <source srcSet={TabletImg} media="(max-width: 56.25em)" />
        <img src={DesktopImg} alt="a picture of a map" className="w-full" />
      </picture>
    </section>
  );
}

export default ContactMap;
