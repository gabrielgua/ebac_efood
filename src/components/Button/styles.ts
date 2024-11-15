import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonProps } from ".";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.button<Omit<ButtonProps, "type">>`
  max-width: ${(props) => (props.size === "full" ? "100%" : "max-content")};
  padding: 0.25rem 0.5rem;
  display: grid;
  place-items: center;
  border: none;
  background-color: ${(props) =>
    props.$variant === "primary" ? colors.red : colors.beige};
  color: ${(props) =>
    props.$variant === "primary" ? colors.beige : colors.red};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const LinkWrapper = styled(Link)<ButtonProps>`
  display: grid;
  place-items: center;
  max-width: ${(props) => (props.size === "full" ? "100%" : "max-content")};
  padding: 0.25rem 0.5rem;
  border: none;
  background-color: ${(props) =>
    props.$variant === "primary" ? colors.red : colors.beige};
  color: ${(props) =>
    props.$variant === "primary" ? colors.beige : colors.red};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
