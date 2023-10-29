import Divider from "./Divider";

function AboutHeritage() {
  return (
    <section className="grid grid-cols-2 gap-12 items-end mt-[20rem] px-64 xmax:px-44 tablet:px-32 mid:px-12 max:grid-cols-1 mid:mt-40">
      <div>
        <Divider />
        <h2 className="max-w-[44.6rem] text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] pb-20 mid:max-w-[27.1rem] mid:text-[4.8rem] nid:leading-[5.2rem] mid:tracking-[-0.1714rem] mid:pb-9">
          Our Heritage
        </h2>
        <p className="text-dark-grey text-[1.8rem] font-medium leading-[2.4rem] pb-8 max-w-[44.6rem] max:max-w-full">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className="text-dark-grey text-[1.8rem] font-medium leading-[2.4rem] pb-8 max-w-[44.6rem] max:max-w-full">
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className="text-dark-grey text-[1.8rem] font-medium leading-[2.4rem] max-w-[44.6rem] max:max-w-full">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className="justify-self-end max:hidden">
        <img
          src="/about/desktop/image-heritage.jpg"
          alt="a picture of a building"
        />
      </div>
    </section>
  );
}

export default AboutHeritage;
