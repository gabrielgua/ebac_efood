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

import img from "../../assets/images/produto_img.png";
import { ProductCardButton } from "../ProductCard/styles";

const Cart = () => (
  <CartWrapper>
    <CartBackdrop />
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
      <ProductCardButton>Continuar com a entrega</ProductCardButton>
    </CartAside>
  </CartWrapper>
);

export default Cart;
