function AboutLeadersBox({ img, name, position }) {
  return (
    <div>
      <div className="relative">
        <img src={img} alt={`a picture of a ${name}`} />

        <div className="absolute top-0 h-full w-full flex justify-center items-center gap-12 z-[3] opacity-0 hover:opacity-100 bg-black bg-opacity-30 transition-all duration-300 cursor-pointer">
          <img
            src="/icons/icon-linkedin.svg"
            alt="a linkedin icon"
            className="cursor-pointer"
          />
          <img
            src="/icons/icon-twitter.svg"
            alt="a twitter icon"
            className="cursor-pointer"
          />
        </div>
      </div>

      <h3 className="text-[3.2rem] font-bold leading-[4rem] text-very-dark-blue">
        {name}
      </h3>
      <p className="text-[1.8rem] font-medium leading-[2.4rem] opacity-75 text-very-dark-blue">
        {position}
      </p>
    </div>
  );
}

export default AboutLeadersBox;
