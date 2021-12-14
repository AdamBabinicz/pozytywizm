import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { HomeSocial } from "./HomeSocial";
import img from "../img/3.png";
import img1 from "../img/16.jpg";
import img2 from "../img/6.png";
import img3 from "../img/5.png";
import { Modal } from "./Modal/Modal";
import { BiDoorOpen } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { TimelineLite } from "gsap";

function Home() {
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

  useEffect(() => {
    const tl = new TimelineLite({ delay: 0.3 });
    tl.from(".homeTitle", {
      duration: 0.5,
      opacity: 0,
      y: 15,
      delay: 1.5,
      ease: "back.out(1.7)",
    })
      .fromTo(
        ".profileBg",
        { opacity: 0.5, scale: 0 },
        { opacity: 1, scale: 1, ease: "elastic.out(1, 0.3)" }
      )
      .from(".button", {
        duration: 0.5,
        opacity: 0,
        y: 20,
        ease: "bounce.out",
      })
      .from(
        "homeSocial a",
        {
          y: 160,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "Start"
      );
  }, []);

  return (
    <>
      <section className="home section bd_grid" id="start">
        <div className="circle circleOne"></div>
        <div className="circle circleTwo"></div>
        <div className="circle circleThree"></div>
        <div className="homeData">
          <h1 className="homeTitle">
            POZYTYWIZM <br /> <span>czyli realizm</span> <br />
            lub naturalizm
          </h1>
          <div
            ref={ref}
            className="button"
            onClick={toggleModal}
            // className={inView ? "" : "corner"}
          >
            {inView ? <>Więcej</> : <BiDoorOpen />}
          </div>
        </div>

        <div className="homeSocial">
          {HomeSocial &&
            HomeSocial.map((social) => (
              <a
                href={social.iconLink}
                key={social.id}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {social.iconName}
              </a>
            ))}
        </div>
        <div className="homeImg">
          <img src={img} alt="..." className="profileImg" />
          <img src={img1} alt="..." className="profileBg" />
          <div className="box box1">
            <div className="imgBox">
              <img src={img2} alt="..." />
            </div>
            <div className="contentBox">
              <h3>Maria Konopnicka</h3>
              <p>Na drodze</p>
            </div>
          </div>
          <div className="box box2">
            <div className="imgBox">
              <img src={img3} alt="..." />
            </div>
            <div className="contentBox">
              <h3>Bolesław Prus</h3>
              <p>Lalka</p>
            </div>
          </div>
        </div>
      </section>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export { Home };
