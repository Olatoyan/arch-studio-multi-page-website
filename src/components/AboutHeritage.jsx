function AboutHeritage() {
  return (
    <section className="grid grid-cols-2 gap-12 items-end mt-[20rem]">
      <div>
        <h2 className="max-w-[44.6rem] text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-20">
          Our Heritage
        </h2>
        <p className="text-dark-grey text-[1.8rem] font-medium leading-[2.4rem] pb-8 max-w-[44.6rem]">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className="text-dark-grey text-[1.8rem] font-medium leading-[2.4rem] pb-8 max-w-[44.6rem]">
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className="text-dark-grey text-[1.8rem] font-medium leading-[2.4rem] max-w-[44.6rem]">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className="justify-self-end">
        <img
          src="/about/desktop/image-heritage.jpg"
          alt="a picture of a building"
        />
      </div>
    </section>
  );
}

export default AboutHeritage;
