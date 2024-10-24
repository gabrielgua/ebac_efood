import styled from "styled-components";
import { colors } from "../../styles";

export const ProfileHeaderWrapper = styled.header`
  min-height: 186px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding-block: 5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
      color: ${colors.red};
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export const ProfileHeaderLink = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
