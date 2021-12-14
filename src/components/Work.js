import React, { useState, useEffect } from "react";
import "../styles/Work.css";
import img from "../img/15.jpg";
import { Modal2 } from "./Modal/Modal2";
import { BiDoorOpen } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

function Work() {
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
      <section className="work section" id="idee">
        <div className="circle work_circleOne"></div>
        <div className="circle work_circleThree"></div>
        <h2 className="section_title">Idee</h2>
        <div className="workContainer bd_grid">
          <div className="workImage">
            <img src={img} alt="..." />
          </div>
          <div className="work_text-section">
            <h3 className="work_subtitle">
              kult zbiorowości, realizm
              <br /> <span>eksperyment</span>
            </h3>
            <p>
              Bohater literacki nie burzył norm, powściągał swoje ambicje i
              pragnienia. Ponad „etykę miłości” pozytywiści przedkładali „etykę
              obowiązku”. Moralne było to, co służyło pożytkowi ogólnemu.
              Ponadto do lamusa odeszła autonomiczna pozycja społeczna artysty.
            </p>
            <p>
              Ówcześni zwolennicy realizmu nawoływali do wyczerpującego opisu
              rzeczywistości, zgłębienia wszystkich warstw społecznych,
              zbliżenia się do normalnego życia. Pisarz miał być uczonym, z
              chłodnym obiektywizmem miał obserwować interesujący go przedmiot.
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
      <Modal2 showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export { Work };
