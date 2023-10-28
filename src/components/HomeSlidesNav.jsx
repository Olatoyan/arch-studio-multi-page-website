import HomeSlidesNavItem from "./HomeSlidesNavItem";

function HomeSlidesNav() {
  return (
    <div className="z-10 relative mt-auto -ml-32">
      <ul className="flex items-center">
        <HomeSlidesNavItem number={1} />
        <HomeSlidesNavItem number={2} />
        <HomeSlidesNavItem number={3} />
        <HomeSlidesNavItem number={4} />
      </ul>
    </div>
  );
}

export default HomeSlidesNav;
