import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonWrapper } from "../Button/styles";

export const CartWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: none;
  justify-content: flex-end;

  &.visible {
    display: flex;
  }
`;

export const CartBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const CartAside = styled.aside`
  position: relative;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.red};
  padding: 1rem;

  ${ButtonWrapper} {
    width: 100%;
  }
`;

export const CartTitle = styled.h2`
  color: ${colors.beige};

  margin-bottom: 1rem;

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const CartItems = styled.ul`
  display: grid;
  gap: 1rem;
`;

export const CartItem = styled.li`
  display: flex;
  gap: 1rem;
  background-color: ${colors.beige};
  padding: 0.5rem;
  color: ${colors.red};
`;

export const CartItemImg = styled.img`
  display: block;
  object-fit: cover;
  width: 80px;
  height: 80px;
`;

export const CartItemInfo = styled.div`
  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    margin-top: 1rem;
  }
`;

export const CartItemRemoveButton = styled.button`
  display: grid;
  place-items: center;

  background-color: transparent;
  border: none;
  color: ${colors.red};

  align-self: flex-end;
  margin-left: auto;

  cursor: pointer;
`;

export const CartTotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-block: 2rem 1rem;

  color: ${colors.beige};
  font-size: 16px;
  font-weight: normal;
`;

export const CartForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type CartFormInputProps = {
  $grow?: "2" | "3";
};

export const CartFormInputMultipleGroups = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CartFormInputGroup = styled.div<CartFormInputProps>`
  display: flex;
  flex: 1;
  flex-grow: ${(props) => (props.$grow ? props.$grow : "1")};
  flex-direction: column;

  gap: 0.25rem;
  color: ${colors.beige};

  input,
  label {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;

    border: none;
    background-color: ${colors.beige};
    padding: 0.5rem;

    &.input-invalid {
      outline: 2px solid ${colors.yellow};
      outline-offset: 1px;
    }
  }

  small {
    color: ${colors.yellow};
    font-weight: bold;
  }
`;

export const CartFormActions = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CartSuccessWrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.beige};
  }
`;

export const CartLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  display: grid;
  padding-top: 15rem;
  justify-content: center;
`;

export const CartEmpty = styled.div`
  margin-top: 2rem;
  p {
    display: grid;
    place-items: center;
    color: ${colors.beige};
  }
`;
