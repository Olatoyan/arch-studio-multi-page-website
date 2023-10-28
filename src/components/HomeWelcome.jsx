function HomeWelcome() {
  return (
    <section className="mt-[30rem] relative">
      <h2 className="text-[25rem] text-very-light-grey leading-[20rem] tracking-[-0.5rem] font-bold absolute top-[-15rem]">
        Welcome
      </h2>
      <div className="grid grid-cols-2 justify-items-end items-end">
        <div className="">
          <h2 className="text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] max-w-[44.6rem] pb-[4.3rem]">
            Welcome to Arch Studio
          </h2>
          <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem] max-w-[44.5rem] pb-12">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem] max-w-[44.5rem] pb-12">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem] max-w-[44.5rem]">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div>
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
