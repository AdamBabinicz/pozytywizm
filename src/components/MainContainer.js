import React, { useEffect } from "react";
import { Home } from "./Home";
import { Services } from "./Services";
import { Work } from "./Work";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import "../styles/MainContainer.css";
import ScrollReveal from "scrollreveal";

function MainContainer() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    ScrollReveal().reveal(sections, {
      delay: 375,
      duration: 500,
      reset: true,
      easing: "ease-in",
    });
  }, []);

  return (
    <main>
      <Home />
      <Services />
      <Work />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export { MainContainer };
