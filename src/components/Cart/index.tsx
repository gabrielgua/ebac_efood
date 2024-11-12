import Icon from "../Icon";
import {
  CartAside,
  CartBackdrop,
  CartItem,
  CartItemImg,
  CartItemInfo,
  CartItemRemoveButton,
  CartTitle,
  CartTotalPrice,
  CartWrapper,
} from "./styles";

import { useState } from "react";
import img from "../../assets/images/produto_img.png";
import Button from "../Button";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const closeCart = () => {
    setOpen(false);
  };

  return (
    <CartWrapper className={open ? "visible" : ""}>
      <CartBackdrop onClick={closeCart} />
      <CartAside>
        <CartTitle>Carrinho</CartTitle>
        <CartItem>
          <CartItemImg src={img} />
          <CartItemInfo>
            <h3>Nome do produto</h3>
            <p>R$ 49,99</p>
          </CartItemInfo>
          <CartItemRemoveButton>
            <Icon icon="trash-can" />
          </CartItemRemoveButton>
        </CartItem>
        <CartItem>
          <CartItemImg src={img} />
          <CartItemInfo>
            <h3>Nome do produto</h3>
            <p>R$ 49,99</p>
          </CartItemInfo>
          <CartItemRemoveButton>
            <Icon icon="trash-can" />
          </CartItemRemoveButton>
        </CartItem>
        <CartTotalPrice>
          <p>Valor total</p>
          <p>R$ 182,99</p>
        </CartTotalPrice>
        <Button>Continuar com a entrega</Button>
      </CartAside>
    </CartWrapper>
  );
};

export default Cart;
