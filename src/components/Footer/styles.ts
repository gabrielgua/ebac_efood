import styled from "styled-components";
import { colors } from "../../styles";

export const FooterWrapper = styled.footer`
  background-color: ${colors.beige};
  text-align: center;
  padding-block: 3rem;
  min-height: 298px;
`;

export const FooterLogo = styled.img`
  display: inline-block;
  margin-bottom: 2rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: auto;
`;

export const FooterText = styled.p`
  font-size: 10px;
  color: ${colors.red};
  margin-top: 3.5rem;
`;
