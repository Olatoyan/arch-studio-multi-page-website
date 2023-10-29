import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const HomeContext = createContext();

const initialState = {
  id: 1,
};

const HomeSlides = [
  {
    id: 1,
    title: "Project Paramour",
    text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    desktopImg: "home/desktop/image-hero-paramour.jpg",
    tabletImg: "home/tablet/image-hero-paramour.jpg",
    mobileImg: "home/mobile/image-hero-paramour.jpg",
  },
  {
    id: 2,
    title: "Seraph Station",
    text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    desktopImg: "home/desktop/image-hero-seraph.jpg",
    tabletImg: "home/tablet/image-hero-seraph.jpg",
    mobileImg: "home/mobile/image-hero-seraph.jpg",
  },
  {
    id: 3,
    title: "Federal II Tower",
    text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    desktopImg: "home/desktop/image-hero-federal.jpg",
    tabletImg: "home/tablet/image-hero-federal.jpg",
    mobileImg: "home/mobile/image-hero-federal.jpg",
  },
  {
    id: 4,
    title: "Trinity Bank Tower",
    text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    desktopImg: "home/desktop/image-hero-trinity.jpg",
    tabletImg: "home/tablet/image-hero-trinity.jpg",
    mobileImg: "home/mobile/image-hero-trinity.jpg",
  },
];

const PortfolioDetails = [
  {
    id: 1,
    date: "September 2019",
    title: "Seraph Staion",
    desktopImg: "/portfolio/desktop/image-seraph.jpg",
    tabletImg: "/portfolio/tablet/image-seraph.jpg",
    mobileImg: "/portfolio/mobile/image-seraph.jpg",
  },
  {
    id: 2,
    date: "August 2017",
    title: "Eebox Building",
    desktopImg: "/portfolio/desktop/image-eebox.jpg",
    tabletImg: "/portfolio/tablet/image-eebox.jpg",
    mobileImg: "/portfolio/mobile/image-eebox.jpg",
  },
  {
    id: 3,
    date: "March 2017",
    title: "Federal II Tower",
    desktopImg: "/portfolio/desktop/image-federal.jpg",
    tabletImg: "/portfolio/tablet/image-federal.jpg",
    mobileImg: "/portfolio/mobile/image-federal.jpg",
  },
  {
    id: 4,
    date: "January 2016",
    title: "Project Del Sol",
    desktopImg: "/portfolio/desktop/image-del-sol.jpg",
    tabletImg: "/portfolio/tablet/image-del-sol.jpg",
    mobileImg: "/portfolio/mobile/image-del-sol.jpg",
  },
  {
    id: 5,
    date: "October 2015",
    title: "Le Prototype",
    desktopImg: "/portfolio/desktop/image-prototype.jpg",
    tabletImg: "/portfolio/tablet/image-prototype.jpg",
    mobileImg: "/portfolio/mobile/image-prototype.jpg",
  },
  {
    id: 6,
    date: "April 2015",
    title: "228B Tower",
    desktopImg: "/portfolio/desktop/image-228b.jpg",
    tabletImg: "/portfolio/tablet/image-228b.jpg",
    mobileImg: "/portfolio/mobile/image-228b.jpg",
  },
  {
    id: 7,
    date: "December 2013",
    title: "Grand Edelweiss Hotel",
    desktopImg: "/portfolio/desktop/image-edelweiss.jpg",
    tabletImg: "/portfolio/tablet/image-edelweiss.jpg",
    mobileImg: "/portfolio/mobile/image-edelweiss.jpg",
  },
  {
    id: 8,
    date: "August 2012",
    title: "Netcry Tower",
    desktopImg: "/portfolio/desktop/image-netcry.jpg",
    tabletImg: "/portfolio/tablet/image-netcry.jpg",
    mobileImg: "/portfolio/mobile/image-netcry.jpg",
  },
  {
    id: 9,
    date: "January 2012",
    title: "Hypers",
    desktopImg: "/portfolio/desktop/image-hypers.jpg",
    tabletImg: "/portfolio/tablet/image-hypers.jpg",
    mobileImg: "/portfolio/mobile/image-hypers.jpg",
  },
  {
    id: 10,
    date: "March 2011",
    title: "SXIV Tower",
    desktopImg: "/portfolio/desktop/image-sxiv.jpg",
    tabletImg: "/portfolio/tablet/image-sxiv.jpg",
    mobileImg: "/portfolio/mobile/image-sxiv.jpg",
  },
  {
    id: 11,
    date: "September 2010",
    title: "Trinity Bank Tower",
    desktopImg: "/portfolio/desktop/image-trinity.jpg",
    tabletImg: "/portfolio/tablet/image-trinity.jpg",
    mobileImg: "/portfolio/mobile/image-trinity.jpg",
  },
  {
    id: 12,
    date: "February 2008",
    title: "Project Paramour",
    desktopImg: "/portfolio/desktop/image-paramour.jpg",
    tabletImg: "/portfolio/tablet/image-paramour.jpg",
    mobileImg: "/portfolio/mobile/image-paramour.jpg",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "changeHomeSlide":
      return { ...state, id: action.payload };
    case "toggleMenu":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
}

function HomeProvider({ children }) {
  const [{ id, isMenuOpen }, dispatch] = useReducer(reducer, initialState);

  return (
    <HomeContext.Provider
      value={{
        dispatch,
        id,
        isMenuOpen,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

function useHome() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
}

export { HomeProvider, useHome, HomeSlides, PortfolioDetails };
