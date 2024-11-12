import styled from "styled-components";
import { colors } from "../../styles";

export const RestaurantCardWrapper = styled.div`
  background-color: ${colors.white};
`;

export const RestaurantCardImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
    max-height: 220px;
    object-fit: cover;
    object-position: top;
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
  padding: 0.5rem;
  gap: 1rem;
  border: 1px solid ${colors.red};
  color: ${colors.red};
`;

export const RestaurantCardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;

  p {
    font-size: 18px;
  }
`;

export const RestaurantCardRating = styled.div`
  display: flex;
  gap: 0.5rem;

  :not(p) {
    color: ${colors.yellow};
  }
`;

export const RestaurantCardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
