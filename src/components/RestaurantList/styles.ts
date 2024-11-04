import styled from "styled-components";
import { colors } from "../../styles";

export const RestaurantListWrapper = styled.div`
  padding-block: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 5rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`;
