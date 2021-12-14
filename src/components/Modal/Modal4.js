import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./ModalStyles";
// import Form from "../Form/Form";

const Modal4 = ({ showModal, toggleModal }) => {
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
            <h3>Pozytywizm wobec romantyzmu</h3>
            <p>
              Krytyczny stosunek do przeszłości stał się dla nowego pokolenia
              twórców, tzw. „młodych”, ideologiczną podstawą. Generacja
              popowstaniowa wykształciła nowy światopogląd, zupełnie odmienny do
              znanego z romantyzmu. Jednak jak podaje Michał Kuziak: „Stosunek
              pozytywistów do romantyków nie jest jednak jednoznacznie
              potępiający. »Młodzi« występowali przede wszystkim przeciw
              romantycznemu światopoglądowi (np. przeciw mesjanizmowi czy
              metafizyce), zwłaszcza – przeciw jego realizacji w polityce
              (poprzednie pokolenie zostało przez nich obarczone
              odpowiedzialnością za wywołanie i klęskę powstania styczniowego)”.
            </p>
            <p>
              Mianem „młodych” określa się generację ludzi urodzonych w latach
              1840-1850. Przeważnie pochodzili oni ze środowisk zdeklasowanej
              szlachty, przez co mówiło się o nich „wysadzeni z siodła”. Nazywa
              się ich również trzecim pokoleniem porozbiorowym.
            </p>
            <p>
              „Młodzi” obrali zupełnie odmienną drogę niż romantycy do
              odzyskania niepodległości. Doskonale zdawali sobie bowiem sprawę,
              iż kolejne powstanie zbrojne, tak jak wszystkie poprzednie, nie
              przyniesie żadnego skutku, a może doprowadzić nawet do
              „wykrwawienia się” Polski.
            </p>
            <p>
              <em>klp.pl/pozytywizm/a-8423.html</em>
            </p>

            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { Modal4 };
