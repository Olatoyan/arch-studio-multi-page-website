import { createContext, useContext, useReducer } from "react";

const ContactContext = createContext();

const initialState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "nameError":
      return { ...state, nameError: action.payload };
    case "emailError":
      return { ...state, emailError: action.payload };
    case "messageError":
      return { ...state, messageError: action.payload };
    default:
      return state;
  }
};

function ContactProvider({ children }) {
  const [
    { name, email, message, nameError, emailError, messageError },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        name,
        email,
        message,
        nameError,
        emailError,
        messageError,
        dispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}

export { ContactProvider, useContact };
