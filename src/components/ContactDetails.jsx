import ContactOffices from "./ContactOffices";

function ContactDetails() {
  return (
    <section className="grid grid-cols-3 gap-12 mt-[28rem]  px-64 xmax:px-44 tablet:px-32 mid:px-12 tablet:grid-cols-1 tablet:gap-16 mid:mt-40">
      <div>
        <h2 className="max-w-[35rem] text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] text-very-dark-blue mid:max-w-[27.1rem] mid:text-[4.8rem] nid:leading-[5.2rem] mid:tracking-[-0.1714rem] ">
          Contact Details
        </h2>
      </div>
      <ContactOffices
        office="Main Office"
        mail="archone@mail.com"
        address="1892  Chenoweth Drive TN"
        phone="123-456-3451"
      />
      <ContactOffices
        office="Office II"
        mail="archtwo@mail.com"
        address="3399  Wines Lane TX"
        phone="832-123-4321"
      />
    </section>
  );
}

export default ContactDetails;
