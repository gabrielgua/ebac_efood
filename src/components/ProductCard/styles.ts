import styled from "styled-components";
import { colors } from "../../styles";

export const ProductCardWrapper = styled.div`
  padding: 0.5rem;
  background-color: ${colors.red};
  color: ${colors.beige};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductCardImg = styled.img`
  display: block;
`;

export const ProductCardName = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductCardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const ProductCardButton = styled.button`
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.red};
  padding: 0.25rem 0.5rem;
  background-color: ${colors.beige};
  cursor: pointer;
`;
