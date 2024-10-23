import styled from "styled-components";
import { colors } from "../../styles";

export const RestaurantCard = styled.div`
  background-color: ${colors.white};
`;

export const RestaurantCardImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
  }
`;

export const RestaurantCardTags = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  top: 0;
  right: 0;
  padding: 1rem;
`;

export const RestaurantTag = styled.div`
  font-size: 12px;
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 0.5rem;
  font-weight: 700;
`;

export const RestaurantCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.75rem;
  border: 1px solid ${colors.red};
`;

export const RestaurantCardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 0.5rem 0.75rem;
`;

export const RestaurantCardDescription = styled.p`
  color: ${colors.red};
  font-size: 14px;
  line-height: 22px;
`;

export const RestaurantCardButton = styled.button`
  max-width: max-content;
  padding: 0.5rem;
  border: none;
  background-color: ${colors.red};
  color: ${colors.beige};
  font-size: 16px;
  font-weight: 700;
`;
