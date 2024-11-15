import Icon from "../Icon";
import {
  CartAside,
  CartBackdrop,
  CartForm,
  CartFormActions,
  CartFormInputGroup,
  CartFormInputMultipleGroups,
  CartItem,
  CartItemImg,
  CartItemInfo,
  CartItemRemoveButton,
  CartItems,
  CartSuccessWrapper,
  CartTitle,
  CartTotalPrice,
  CartWrapper,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import Button from "../Button";
import { formatPrice } from "../Modal";
import { useState } from "react";

type CartStepNames = "cart" | "delivery" | "payment" | "success";
type CartStep = {
  name: CartStepNames;
  show: boolean;
  title?: string;
};

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

  const [cartSteps, setCartSteps] = useState<CartStep[]>([
    { name: "cart", show: true, title: "Carrinho" },
    { name: "delivery", show: false, title: "Entrega" },
    { name: "payment", show: false, title: "Pagamento" },
    { name: "success", show: false, title: "Pedido realizado" },
  ]);

  const goToCartStep = (name: CartStepNames) => {
    const updatedSteps = cartSteps.map((step) => {
      if (step.name === name) {
        step.show = true;
        return step;
      }
      step.show = false;
      return step;
    });
    setCartSteps(updatedSteps);
  };

  const showCardStep = (name: CartStepNames) => {
    return cartSteps.find((step) => step.name === name)?.show;
  };

  const getCurrentStepTitle = () => {
    const current = cartSteps.find((step) => step.show === true);

    if (current) {
      return current.title;
    }
  };

  return (
    <CartWrapper className={visible ? "visible" : ""}>
      <CartBackdrop onClick={closeCart} />
      <CartAside>
        <CartTitle>{getCurrentStepTitle()}</CartTitle>
        {showCardStep("cart") ? (
          <>
            <CartItems>
              {items.map((p) => (
                <CartItem key={p.id}>
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
            </CartItems>
            <CartTotalPrice>
              <p>Valor total</p>
              <p>{formatPrice(calculateTotalPrice())}</p>
            </CartTotalPrice>
            <Button
              $variant="secondary"
              onClick={() => goToCartStep("delivery")}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <CartForm>
            {showCardStep("delivery") && (
              <>
                <CartFormInputGroup>
                  <label htmlFor="deliveryName">Quem irá receber?</label>
                  <input id="deliveryName" type="text" />
                </CartFormInputGroup>
                <CartFormInputGroup>
                  <label htmlFor="deliveryAdress">Endereço</label>
                  <input id="deliveryAdress" type="text" />
                </CartFormInputGroup>
                <CartFormInputGroup>
                  <label htmlFor="deliveryCity">Cidade</label>
                  <input id="deliveryCity" type="text" />
                </CartFormInputGroup>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup>
                    <label htmlFor="deliveryCep">CEP</label>
                    <input id="deliveryCep" type="text" />
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="deliveryNumber">Número</label>
                    <input id="deliveryNumber" type="text" />
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>
                <CartFormInputGroup>
                  <label htmlFor="deliveryComplement">
                    Complemento (opcional)
                  </label>
                  <input id="deliveryComplement" type="text" />
                </CartFormInputGroup>
                <CartFormActions>
                  <Button
                    $variant="secondary"
                    onClick={() => goToCartStep("payment")}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    $variant="secondary"
                    onClick={() => goToCartStep("cart")}
                  >
                    Voltar para o carrinho
                  </Button>
                </CartFormActions>
              </>
            )}

            {showCardStep("payment") && (
              <>
                <CartFormInputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input id="cardName" type="text" />
                </CartFormInputGroup>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup $grow="3">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" />
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="cardCvv">CVV</label>
                    <input id="cardCvv" type="text" />
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup>
                    <label htmlFor="cardExpiryMonth">Mês de vencimento</label>
                    <input id="cardExpiryMonth" type="text" />
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="cardExpiryYear">Ano de vencimento</label>
                    <input id="cardExpiryYear" type="text" />
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>

                <CartFormActions>
                  <Button $variant="secondary" type="button" submit>
                    Finalizar pagamento
                  </Button>
                  <Button
                    $variant="secondary"
                    onClick={() => goToCartStep("delivery")}
                  >
                    Voltar para a edição do endereço
                  </Button>
                </CartFormActions>
              </>
            )}
          </CartForm>
        )}

        {showCardStep("success") && (
          <CartSuccessWrapper>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button $variant="secondary" onClick={closeCart}>
              Concluir
            </Button>
          </CartSuccessWrapper>
        )}
      </CartAside>
    </CartWrapper>
  );
};

export default Cart;
