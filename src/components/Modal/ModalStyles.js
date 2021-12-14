import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalWrapper = styled(motion.div)`
  width: clamp(400px, 90vw, 800px);
  max-height: 90vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: scroll;
  border-radius: 10px;

  h2 {
    margin-top: 2rem;
    text-align: center;
    font-family: "Sorts Mill Goudy", serif;
  }
  h3 {
    font-family: "Sorts Mill Goudy", serif;
    text-align: center;
    margin-bottom: 1rem;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  p {
    padding: 0.5rem 4rem;
    max-height: 100%;
    font-family: "Sorts Mill Goudy", serif;
    font-size: 18px;

    em {
      font-size: 1rem;
    }

    @media only screen and (max-width: 768px) {
      padding: 0.5rem 2rem;

      :nth-child(6) {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
