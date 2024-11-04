import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderWrapper = styled.header`
  padding: 2rem;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

export const HeaderText = styled.h2`
  font-size: 36px;
  color: ${colors.red};
  text-align: center;
  margin-top: auto;
`;
