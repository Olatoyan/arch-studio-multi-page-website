import { useHome } from "../contexts/HomeContext";

function HomeSlidesNavItem({ number }) {
  const { id, dispatch } = useHome();

  function changeSlide(id) {
    dispatch({ type: "changeHomeSlide", payload: id });
  }

  return (
    <li
      className={`text-[1.8rem] font-bold leading-[2.5rem] w-32 h-32 flex items-center justify-center cursor-pointer ${
        id === number
          ? "text-white bg-very-dark-blue"
          : "text-medium-grey bg-white hover:bg-very-light-grey"
      } `}
      onClick={() => changeSlide(number)}
    >
      0{number}
    </li>
  );
}

export default HomeSlidesNavItem;
