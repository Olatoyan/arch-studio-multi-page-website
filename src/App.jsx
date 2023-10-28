import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeProvider } from "./contexts/HomeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import { ContactProvider } from "./contexts/ContactContext";

function App() {
  return (
    <div className="relative px-64 py-20">
      <HomeProvider>
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
      </HomeProvider>
    </div>
  );
}

export default App;
