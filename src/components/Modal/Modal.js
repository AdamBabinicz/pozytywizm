import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./ModalStyles";
// import Form from "../Form/Form";

const Modal = ({ showModal, toggleModal }) => {
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
            <h3>„Wiek pary i elektryczności”</h3>
            <p>
              Termin „pozytywizm” pojawił się w pismach francuskiego filozofa
              Augusta Comte’a, a dokładnie w jego sześciotomowym dziele pt. Kurs
              filozofii pozytywnej. Ten termin filozof stosował na określenie
              czegoś co jest: ścisłe, bo dokładnie wyznaczone; pewne, bo
              potwierdzone i uzasadnione. Ponadto określenia „pozytywny” używał
              w znaczeniu użyteczny, bo służący korzystnym działaniom dla dobra
              ogółu oraz względny, a więc tolerujący różne punkty widzenia.
              Pozytywizm był zarówno ruchem społecznym i literackim. To nazwa
              kolejnej epoki w dziejach kultury. Ponadto terminem tym określa
              się także nurt światopoglądowy i filozoficzny, który pojawił się w
              II połowie XIX wieku.
            </p>
            <p>
              W Polsce datą rozpoczynającą nową epokę w dziejach kultury jest
              rok 1864 – upadek powstania styczniowego, natomiast w Europie
              pierwszą fazę pozytywizmu wiąże się z wydaniem Kursu filozofii
              pozytywnej A. Comte’a – 1830-1842. Rozkwit pozytywizmu nastąpił w
              Polsce w latach 80., a jego schyłek w przypadł na lata 90.
            </p>
            <p>
              <em>matura100procent.pl/pozytywizm-opis-epoki</em>
            </p>

            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { Modal };
