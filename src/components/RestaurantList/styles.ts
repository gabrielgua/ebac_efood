import styled from "styled-components";
import { colors } from "../../styles";

export const RestaurantListWrapper = styled.div`
  padding-block: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 5%;

  @media (max-width: 860px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

export const RestaurantListTitle = styled.h2`
  margin-block: 2rem;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.red};
`;
