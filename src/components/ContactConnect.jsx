import { useContact } from "../contexts/ContactContext";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import ArrowIcon from "./ArrowIcon";
import FormInputs from "./FormInputs";

function ContactConnect() {
  const { inViewRef, inView } = useIntersectionObserver();
  const {
    name,
    email,
    message,
    nameError,
    emailError,
    messageError,
    dispatch,
  } = useContact();

  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      dispatch({ type: "nameError", payload: "Can't be empty" });
    } else {
      dispatch({ type: "nameError", payload: "" });
    }

    if (!email.trim()) {
      dispatch({ type: "emailError", payload: "Can't be empty" });
    } else if (!isValidEmail(email)) {
      dispatch({ type: "emailError", payload: "Invalid email" });
    } else {
      dispatch({ type: "emailError", payload: "" });
    }

    if (!message.trim()) {
      dispatch({ type: "messageError", payload: "Can't be empty" });
    } else {
      dispatch({ type: "messageError", payload: "" });
    }
  }

  return (
    <section
      className={`flex gap-[15rem] mt-[13rem] px-64 xmax:px-44 tablet:px-32 mid:px-12 tablet:flex-col tablet:gap-20 mid:mt-40  fade-in ${
        inView ? "in-view" : ""
      }`}
      ref={inViewRef}
    >
      <div>
        <h2 className="text-very-dark-blue text-[7.2rem] font-bold leading-[6.4rem] tracking-[-0.2rem] max-w-[35rem] mid:max-w-[27.1rem] mid:text-[4.8rem] nid:leading-[5.2rem] mid:tracking-[-0.1714rem]">
          Connect with us
        </h2>
      </div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <FormInputs
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
          error={nameError}
        />
        <FormInputs
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
          error={emailError}
        />
        <Message
          placeholder="Message"
          type="text"
          value={message}
          onChange={(e) =>
            dispatch({ type: "message", payload: e.target.value })
          }
          error={messageError}
        />
        <button className="self-end bg-very-dark-blue p-[2.7rem] hover:bg-dark-grey transition-all duration-300">
          <ArrowIcon />
        </button>
      </form>
    </section>
  );
}

export default ContactConnect;

function Message({ type, placeholder, value, onChange, error }) {
  return (
    <div>
      <div className="flex pb-4 border-b-very-dark-blue border-b px-12 ">
        <textarea
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border-0 outline-none bg-transparent placeholder:text-light-grey text-[2rem] font-bold tracking-[-0.0312rem] text-very-dark-blue resize-none w-[80%] mid:w-[75%]"
        />
        {error && (
          <p className="text-error text-[1.8rem] font-bold tracking-[-0.0281rem] ml-auto mid:text-[1.5rem]">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
