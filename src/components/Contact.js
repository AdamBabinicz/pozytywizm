import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import { Modal4 } from "./Modal/Modal4";
import { BiDoorOpen } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };
  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <>
      <section className="contact section" id="tło">
        <div className="circle contact_circleOne"></div>
        <div className="circle contact_circleThree"></div>
        <h2 className="section_title">Tło</h2>
        <div className="contactContainer bd_grid">
          <p>
            Po upadku powstania wielu Polaków porzuciło nadzieję na odzyskanie
            niepodległości za pomocą walki zbrojnej. Razem z tymi nadziejami
            odsuwano – choć często tylko częściowo – wzorce kształtowane w
            okresie romantyzmu. Polski pozytywizm, który czerpał swe inspiracje
            z filozofii Comte’a, ale również z pism brytyjskich uczonych,
            stawiał racjonalne rozumowanie ponad emocjami. Będąc jednak
            organicznie związanym ze sprawą polską, podejście uniwersalnie
            charakterystyczne dla nowego prądu stosował przede wszystkim do
            kwestii suwerennego państwa polskiego. Polscy pozytywiści metodę
            podtrzymania polskiej tożsamości widzieli nie w powstaniach
            narodowych, ale w pracy i konstruktywnym patriotyzmie.
            Argumentowano, że jeśli Polska ma odzyskać niepodległość, to w
            sposób stopniowy, poprzez pracę u podstaw i pracę organiczną:
            zbiorowy wysiłek całego społeczeństwa na rzecz stworzenia
            podstawowej materialnej infrastruktury, edukacji i poprawy sytuacji
            życiowej mas. Bolesław Prus doradzał na przykład, aby miejsce Polski
            w świecie było wyznaczone przez przyczynki do rozwoju ekonomicznego,
            naukowego i kulturalnego. Źródeł tych koncepcji można doszukać się w
            dziełach Herberta Spencera.
          </p>
          <p>
            Innymi problemami typowymi dla polskiego pozytywizmu były też
            kwestia praw kobiet, asymilacja mniejszości żydowskiej,
            przeciwdziałanie skutkom polityki Bismarcka (Kulturkampf), zwłaszcza
            germanizacji, i przejmowaniu posiadłości przez niemieckich
            osadników.
          </p>
          <p>
            <em>pl.wikipedia.org/wiki/Pozytywizm</em>
          </p>
          <div
            ref={ref}
            className="button"
            onClick={toggleModal}
            // className={inView ? "" : "corner"}
          >
            {inView ? <>Więcej</> : <BiDoorOpen />}
          </div>
        </div>
      </section>
      <Modal4 showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export { Contact };
