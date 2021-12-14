import React, { useState, useEffect } from "react";
import "../styles/About.css";
import img from "../img/13.jpg";
import { Modal3 } from "./Modal/Modal3";
import { BiDoorOpen } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

function About() {
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
      <section className="about section" id="geneza">
        <div className="circle about_circleOne"></div>
        <div className="circle about_circleThree"></div>
        <h2 className="section_title">Geneza</h2>
        <div className="aboutContainer bd_grid">
          <div className="about_text-section">
            <h3 className="about_subtitle">
              założenia filozoficznej teorii poznania
              <br />
              <span>
                empiryzm, fenomenalizm, nominalizm, agnostycyzm, scjentyzm
              </span>
            </h3>
            <p>
              Twórcą pozytywistycznej filozofii był August Comte. Określenie
              „pozytywizm”, którym posłużył August Comte w swojej pracy Kurs
              filozofii pozytywnej, obecne było już w pracach Henri
              Saint-Simona.
            </p>
            <p>
              Częściej niż do Comte`a nawiązywano do Johna Stuarta Milla –
              empirysty, uważającego, że źródłem wiedzy jest doświadczenie. Był
              przekonany, że dobre jest to, co jest pożyteczne. Bronił wolności
              jednostki, występował w obronie praw kobiet.
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
          <div className="aboutImage">
            <img src={img} alt="..." />
          </div>
        </div>
      </section>
      <Modal3 showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export { About };
