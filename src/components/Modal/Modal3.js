import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./ModalStyles";

const Modal3 = ({ showModal, toggleModal }) => {
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
            <h3>Filozofia pozytywizmu</h3>
            <p>
              Pozytywiści zakładali, że w sferze nauki nie mieszczą się
              dociekania metafizyczne, poznawać można jedynie zjawiska dostępne
              zmysłom. Poza tymi zjawiskami istnieje jednakże prawdziwa
              rzeczywistość, która jest niepoznawalna - zjawiska są względne, a
              to, co względne, nie jest ostateczne, lecz wskazuje na istnienie
              czegoś bezwzględnego. To stanowisko jeden z uczniów Spencera
              nazwał z grecka agnostycyzmem. Agnostycyzm bywa też kojarzony ze
              sceptycyzmem, czyli postawą wątpienia, niedowierzania.
            </p>
            <p>
              H. Taine jest twórcą determinizmu, poglądu, że człowiek jest
              uzależniony (zdeterminowany) od czynników biologicznych
              (genetyka), środowiska, w którym żyje i momentu historycznego.
            </p>
            <p>
              Myśliciele tego okresu postulowali tolerancję i maksymalny rozwój
              swobód ludzkich - w myśli i działaniu. Ta postawa nosi nazwę
              liberalizmu.
            </p>
            <p>
              <em>
                opracowania.pl/opracowania/jezyk-polski/wprowadzenie-do-pozytywizmu,oid,427,filozofia-pozytywizmu
              </em>
            </p>

            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { Modal3 };
