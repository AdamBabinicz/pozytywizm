import React from "react";
import { Home } from "./Home";
import { Services } from "./Services";
import { Work } from "./Work";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import "../styles/MainContainer.css";

function MainContainer() {
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
