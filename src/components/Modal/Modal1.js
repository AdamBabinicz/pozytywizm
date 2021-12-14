import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./ModalStyles";

const Modal1 = ({ showModal, toggleModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key && showModal) {
        toggleModal();
      }
    },
    [showModal, toggleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);

    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const backgroundVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const modalVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },

    exit: {
      y: -200,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <Background
          variants={backgroundVariants}
          animate="animate"
          initial="initial"
          onClick={closeModal}
          ref={modalRef}
          exit={{
            opacity: 0,
          }}
        >
          <ModalWrapper
            variants={modalVariants}
            animate="animate"
            initial="initial"
            exit={{
              opacity: 0,
              y: "-100vh",
            }}
          >
            <h2>Pozytywizm</h2>
            <h3>Utylitaryzm</h3>
            <p>
              Przyczyn powstania utylitaryzmu należy dopatrywać się w
              postrzeganiu społeczeństwa jako organizmu. Zgodnie z tym sposobem
              widzenia jego sprawne funkcjonowanie było uzależnione od
              poszczególnych części. Właśnie ich pożyteczne (przynoszące
              korzyści) działanie stanowiło ważny element dalszego rozwoju.
              Utylitaryzm miał więc zachęcać ludzi do takiego postępowanie,
              które byłoby korzystne dla społeczeństwa.
            </p>
            <p>
              Utylitaryzm oparty jest na zasadzie użyteczności. Według tej
              koncepcji moralne są takie uczynki, które można postrzegać jako
              najbardziej praktyczne, przynoszące dobre efekty. Pozytywistyczna
              wizja utylitaryzmu zakładała, iż każde postępowanie winno owocować
              jak największym szczęściem jak największej ilości ludzi. Ówcześni
              myśliciele twierdzili, że nie istnieje konflikt interesów między
              jednostką a społeczeństwem. Dlatego też wartość człowieka widzieli
              oni w „cegiełce”, jaką dokładał on do rozwoju społeczeństwa na
              różnych płaszczyznach (kultura, polityka itp.).
            </p>
            <p>
              <em>eszkola.pl/jezyk-polski/utylitaryzm-1298.html</em>
            </p>

            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { Modal1 };
