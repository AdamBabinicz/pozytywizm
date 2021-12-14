import React, { useState, useEffect } from "react";
import { ServiceBox } from "./ServiceBox";
import "../styles/Services.css";
import img from "../img/3.jpg";
import img1 from "../img/1.jfif";
import img2 from "../img/19.jpg";
import img3 from "../img/11.jpg";
import { Modal1 } from "./Modal/Modal1";
import { BiDoorOpen } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

function Services() {
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
      <section className="services section" id="program">
        <div className="circle services_circleOne"></div>
        <div className="circle services_circleThree"></div>
        <h2 className="section_title">Program polskiego pozytywizmu</h2>
        <div className="serviceContainer bd_grid">
          <div className="serviceImage">
            <ServiceBox
              imgName={img}
              box_name={"Praca u podstaw"}
              box_desc={
                "szeroko pojęta edukacja ludu, czyli podstawy społeczeństwa"
              }
            />
            <ServiceBox
              imgName={img1}
              box_name={"Praca organiczna"}
              box_desc={
                "pojmowanie całego społeczeństwa jako jednego wielkiego organizmu"
              }
            />
            <ServiceBox
              imgName={img2}
              box_name={"Kwestia żydowska"}
              box_desc={"odrzucenie stereotypowego wizerunku Żyda"}
            />
            <ServiceBox
              imgName={img3}
              box_name={"Emancypacja kobiet"}
              box_desc={"kobieta równym mężczyźnie jest człowiekiem"}
            />
          </div>
          <div className="service_text-section">
            <h3 className="service_subtitle">
              Pedagogika, dydaktyka
              <br /> <span>utylitaryzm</span>
            </h3>
            <p>
              Dysonans między twórczością „romantyczną” a realistyczną jest tak
              duży, że epoka przypadająca w Polsce na II połowę XIX-wieku, a w
              Europie na lata 1850-1880, jest często nazywana całkowitym
              <b> zaprzeczeniem</b> swej poprzedniczki. <b>Pozytywizm</b> to
              epoka propagująca{" "}
              <b>filozofię wiedzy, doświadczenia, badań naukowych</b>,
              kultywująca ideał pracy, miłości do ziemi, wiek dominacji prozy
              czy poezji „czasów niepoetyckich”. <b>Pozytywizm</b> jako nurt
              literacko-umysłowy występował jedynie w Polsce. W krajach takich
              jak Francja, Wielka Brytania czy chociażby Rosja rozwijały się
              takie nurty, jak <b>realizm, naturalizm i ekspresjonizm</b>.
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
        </div>
      </section>
      <Modal1 showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export { Services };
