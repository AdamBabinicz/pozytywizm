import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Background, CloseModalButton, ModalWrapper } from "./ModalStyles";
// import Form from "../Form/Form";

const Modal2 = ({ showModal, toggleModal }) => {
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
            <h3>Realizm</h3>
            <p>
              Re­alizm to ten­den­cja do uka­zy­wa­nia świa­ta
              przed­sta­wio­ne­go w spo­sób jak naj­bar­dziej zbli­żo­ny do
              rze­czy­wi­sto­ści. Jako prąd li­te­rac­ki uwi­dacz­nia się przede
              wszyst­kim w epo­ce po­zy­ty­wi­zmu. Jest prze­ci­wień­stwem
              ro­man­tycz­ne­go ro­zu­mie­nia sztu­ki.
            </p>
            <p>
              Ce­lem nad­rzęd­nym sztu­ki re­ali­stycz­nej było jak
              naj­wier­niej­sze od­zwier­cie­dla­nie rze­czy­wi­sto­ści. Opis
              świa­ta miał być po­zba­wio­ny su­biek­ty­wi­zmu. Pi­sa­rze
              two­rzą­cy w nur­cie re­ali­zmu nie­chęt­nie pod­cho­dzi­li do
              wsze­la­kich prze­ja­wów upięk­sza­nia czy wpro­wa­dza­nia zmian w
              opi­sy­wa­niu świa­ta. Kon­wen­cja re­ali­stycz­na uwi­dacz­nia­ła
              się przede wszyst­kim w li­te­ra­tu­rze i ma­lar­stwie.
            </p>

            <p>
              <em>poezja.org/wz/a/Realizm</em>
            </p>

            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { Modal2 };
