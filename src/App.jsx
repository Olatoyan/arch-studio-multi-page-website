import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useHome } from "./contexts/HomeContext";
import { ContactProvider } from "./contexts/ContactContext";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Homepage from "./pages/Homepage";
// import Portfolio from "./pages/Portfolio";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

const Homepage = lazy(() => import("./pages/Homepage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const { isMenuOpen, dispatch } = useHome();

  const handleMenuToggle = () => {
    dispatch({ type: "toggleMenu" });
  };
  return (
    <div className="relative  py-20 mid:py-0">
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 h-full w-full bg-black opacity-50  }`}
        style={{ zIndex: 15 }}
        onClick={handleMenuToggle}
      ></div>
      <Suspense fallback={<Spinner />}>
        <ContactProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ContactProvider>
      </Suspense>
    </div>
  );
}

export default App;
