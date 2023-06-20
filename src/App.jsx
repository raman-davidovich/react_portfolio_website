import React from "react";
import ProgressBar from "./components/progressBar/ProgressBar";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Certifications from "./components/certifications/Certifications";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <Nav />
      <About />
      <Certifications />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
