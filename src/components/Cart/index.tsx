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

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import Button from "../Button";
import { formatPrice } from "../Modal";

const Cart = () => {
  const { items, visible } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const calculateTotalPrice = () => {
    return items.reduce((a, current) => {
      return (a += current.preco);
    }, 0);
  };

  const removeItem = (id: number) => dispatch(remove(id));

  return (
    <CartWrapper className={visible ? "visible" : ""}>
      <CartBackdrop onClick={closeCart} />
      <CartAside>
        <CartTitle>Carrinho</CartTitle>
        {items.map((p) => (
          <CartItem>
            <CartItemImg src={p.foto} />
            <CartItemInfo>
              <h3>{p.nome}</h3>
              <p>{formatPrice(p.preco)}</p>
            </CartItemInfo>
            <CartItemRemoveButton onClick={() => removeItem(p.id)}>
              <Icon icon="trash-can" />
            </CartItemRemoveButton>
          </CartItem>
        ))}
        <CartTotalPrice>
          <p>Valor total</p>
          <p>{formatPrice(calculateTotalPrice())}</p>
        </CartTotalPrice>
        <Button variant="secondary">Continuar com a entrega</Button>
      </CartAside>
    </CartWrapper>
  );
};

export default Cart;
