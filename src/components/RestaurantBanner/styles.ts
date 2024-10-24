import styled from "styled-components";
import { colors } from "../../styles";

export const RestaurantHeroWrapper = styled.div`
  height: 280px;
  position: relative;
`;

export const RestaurantHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(50%);
  display: block;
  position: absolute;
  z-index: -1;
`;

export const RestaurantHeroContent = styled.div`
  font-size: 32px;
  color: ${colors.white};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 2rem;
`;

export const RestaurantHeroCategory = styled.p`
  font-weight: 100;
`;

export const RestarantHeroName = styled.p`
  font-weight: bold;
`;
