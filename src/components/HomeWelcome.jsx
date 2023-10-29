import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Divider from "./Divider";

function HomeWelcome() {
  const { inView, inViewRef } = useIntersectionObserver();
  return (
    <section
      className={`mt-[30rem] relative px-64 xmax:px-44 tablet:px-32 mid:px-12 mid:mt-32  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
    >
      <h2 className="text-[25rem] xmax:text-[19rem] text-very-light-grey leading-[20rem] tracking-[-0.5rem] font-bold absolute top-[-15rem] max:top-[-20rem] max:text-[12rem] mid:hidden">
        Welcome
      </h2>
      <Divider />

      <div className="grid grid-cols-2 justify-items-end items-end max:grid-cols-1">
        <div className="">
          <h2 className="text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] max-w-[44.6rem] pb-[4.3rem] mid:text-[4.8rem] mid:leading-[5.2rem] mid:tracking-[-0.1714rem] mid:max-w-[31.1rem] mid:pb-[2.2rem]">
            Welcome to Arch Studio
          </h2>
          <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem] max-w-[44.5rem] pb-12 max:max-w-full mid:max-w-full">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem] max-w-[44.5rem] pb-12 max:max-w-full">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem] max-w-[44.5rem] max:max-w-full">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className="max:hidden">
          <img
            src="home/desktop/image-welcome.jpg"
            alt="picture of a building"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeWelcome;
