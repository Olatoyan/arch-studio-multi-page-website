import ContactConnect from "../components/ContactConnect";
import ContactDetails from "../components/ContactDetails";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactMap from "../components/ContactMap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageName from "../components/PageName";

function Contact() {
  return (
    <div className="">
      <PageName>Contact</PageName>
      <Header />
      <ContactHeroSection />
      <ContactDetails />
      <ContactMap />
      <ContactConnect />
      <Footer />
    </div>
  );
}

export default Contact;
