function ContactOffices({ office, mail, address, phone }) {
  return (
    <div>
      <h3 className="text-[1.8rem] text-dark-grey font-bold leading-[3.5rem] pb-6">
        {office}
      </h3>
      <div>
        <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem]">
          Mail: <span>{mail}</span>
        </p>
        <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem]">
          Address: <span>{address}</span>
        </p>
        <p className="text-[1.8rem] text-dark-grey font-medium leading-[2.4rem]">
          Phone: <span>{phone}</span>
        </p>
      </div>
      {/* <div className="flex items-center gap-6 mt-24">
        <p className="text-[1.8rem] text-very-dark-blue font-medium leading-[2.45em]">
          View on Map
        </p>
        <img src="/icons/icon-arrow-dark.svg" alt="an arrow icon" />
      </div> */}
    </div>
  );
}

export default ContactOffices;
