import Icon from "../Icon";
import {
  CartAside,
  CartBackdrop,
  CartEmpty,
  CartForm,
  CartFormActions,
  CartFormInputGroup,
  CartFormInputMultipleGroups,
  CartItem,
  CartItemImg,
  CartItemInfo,
  CartItemRemoveButton,
  CartItems,
  CartLoader,
  CartSuccessWrapper,
  CartTitle,
  CartTotalPrice,
  CartWrapper,
} from "./styles";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useOrderMutation } from "../../services/api";
import { RootReducer } from "../../store";
import { clear, close, remove } from "../../store/reducers/cart";
import Button from "../Button";
import Loader from "../Loader";
import { formatPrice } from "../Modal";

type CartStepNames = "cart" | "delivery" | "payment" | "success";
type CartStep = {
  name: CartStepNames;
  show: boolean;
  title?: string;
};

const Cart = () => {
  const dispatch = useDispatch();
  const [order, { data, isSuccess, isLoading }] = useOrderMutation();
  const { items, visible } = useSelector((state: RootReducer) => state.cart);

  const [cartSteps, setCartSteps] = useState<CartStep[]>([
    { name: "cart", show: true, title: "Carrinho" },
    { name: "delivery", show: false, title: "Entrega" },
    { name: "payment", show: false, title: "Pagamento" },
    { name: "success", show: false, title: "Pedido realizado" },
  ]);

  const closeCart = () => {
    dispatch(close());
    goToCartStep("cart");
  };

  const calculateTotalPrice = () => {
    return items.reduce((a, current) => {
      return (a += current.preco);
    }, 0);
  };

  const removeItem = (id: number) => dispatch(remove(id));

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

  useEffect(() => {
    if (isSuccess) {
      goToCartStep("success");
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  const form = useFormik({
    initialValues: {
      deliveryName: "",
      deliveryAdress: "",
      deliveryCity: "",
      deliveryCep: "",
      deliveryNumber: "",
      deliveryComplement: "",
      cardName: "",
      cardNumber: "",
      cardCvv: "",
      cardExpiryMonth: "",
      cardExpiryYear: "",
    },
    validationSchema: Yup.object({
      deliveryName: Yup.string().required("Campo obrigatório."),
      deliveryAdress: Yup.string().required("Campo obrigatório."),
      deliveryCity: Yup.string().required("Campo obrigatório."),
      deliveryCep: Yup.string().required("Campo obrigatório."),
      deliveryNumber: Yup.string().required("Campo obrigatório."),
      deliveryComplement: Yup.string(),
      cardName: Yup.string().required("Campo obrigatório."),
      cardNumber: Yup.string().required("Campo obrigatório."),
      cardCvv: Yup.string().required("Campo obrigatório."),
      cardExpiryMonth: Yup.string().required("Campo obrigatório."),
      cardExpiryYear: Yup.string().required("Campo obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      order({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: form.values.deliveryName,
          address: {
            description: form.values.deliveryAdress,
            city: form.values.deliveryCity,
            zipCode: form.values.deliveryCep,
            number: Number(form.values.deliveryNumber),
            complement: form.values.deliveryComplement,
          },
        },
        payment: {
          card: {
            name: form.values.cardName,
            number: form.values.cardNumber,
            code: Number(form.values.cardCvv),
            expires: {
              month: Number(form.values.cardExpiryMonth),
              year: Number(form.values.cardExpiryYear),
            },
          },
        },
      });

      resetForm();
    },
  });

  return (
    <CartWrapper className={visible ? "visible" : ""}>
      <CartBackdrop onClick={closeCart} />
      <CartAside>
        <CartTitle>
          {getCurrentStepTitle()}
          {showCardStep("payment") && (
            <span> - Valor a pagar {formatPrice(calculateTotalPrice())}</span>
          )}
          {showCardStep("success") && <span> - {data?.orderId}</span>}
        </CartTitle>
        {showCardStep("cart") ? (
          <>
            {!items.length ? (
              <CartEmpty>
                <p>Parece que seu carrinho está vazio :( </p>
                <p>Tente adicionar alguns produtos primeiro.</p>
              </CartEmpty>
            ) : (
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
            )}
          </>
        ) : (
          <CartForm onSubmit={form.handleSubmit}>
            {isLoading && (
              <CartLoader>
                <Loader />
              </CartLoader>
            )}
            {showCardStep("delivery") && (
              <>
                <CartFormInputGroup>
                  <label htmlFor="deliveryName">Quem irá receber?</label>
                  <input
                    id="deliveryName"
                    type="text"
                    name="deliveryName"
                    value={form.values.deliveryName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </CartFormInputGroup>
                <CartFormInputGroup>
                  <label htmlFor="deliveryAdress">Endereço</label>
                  <input
                    id="deliveryAdress"
                    type="text"
                    name="deliveryAdress"
                    value={form.values.deliveryAdress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </CartFormInputGroup>
                <CartFormInputGroup>
                  <label htmlFor="deliveryCity">Cidade</label>
                  <input
                    id="deliveryCity"
                    type="text"
                    name="deliveryCity"
                    value={form.values.deliveryCity}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </CartFormInputGroup>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup>
                    <label htmlFor="deliveryCep">CEP</label>
                    <input
                      id="deliveryCep"
                      type="text"
                      name="deliveryCep"
                      value={form.values.deliveryCep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="deliveryNumber">Número</label>
                    <input
                      id="deliveryNumber"
                      type="text"
                      name="deliveryNumber"
                      value={form.values.deliveryNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>
                <CartFormInputGroup>
                  <label htmlFor="deliveryComplement">
                    Complemento (opcional)
                  </label>
                  <input
                    id="deliveryComplement"
                    type="text"
                    name="deliveryComplement"
                    value={form.values.deliveryComplement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
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
                  <input
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </CartFormInputGroup>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup $grow="3">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="cardCvv">CVV</label>
                    <input
                      id="cardCvv"
                      type="text"
                      name="cardCvv"
                      value={form.values.cardCvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup>
                    <label htmlFor="cardExpiryMonth">Mês de vencimento</label>
                    <input
                      id="cardExpiryMonth"
                      type="text"
                      name="cardExpiryMonth"
                      value={form.values.cardExpiryMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="cardExpiryYear">Ano de vencimento</label>
                    <input
                      id="cardExpiryYear"
                      type="text"
                      name="cardExpiryYear"
                      value={form.values.cardExpiryYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>

                <CartFormActions>
                  <Button $variant="secondary" type="button" submit>
                    {isLoading
                      ? "Finalizando o pagamento..."
                      : "Finalizar pagamento"}
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
