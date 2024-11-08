import styled from "styled-components";
import { colors } from "../../styles";
import { ProductCardButton } from "../ProductCard/styles";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: none;
  place-items: center;

  &.open {
    display: grid;
  }
`;

export const ModalBackdrop = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 2rem;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 2rem;
  position: relative;

  img {
    max-height: 280px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
  }

  ${ProductCardButton} {
    max-width: max-content;
    margin-top: auto;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const ModalText = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  margin-top: 1rem;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.65rem;
  font-size: large;
  display: grid;
  place-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.white};
`;
