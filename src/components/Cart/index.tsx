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
import ReactInputMask from "react-input-mask";
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
      deliveryCep: Yup.string()
        .length(9, "CEP inválido.")
        .required("Campo obrigatório."),
      deliveryNumber: Yup.number()
        .positive("Deve ser positivo")
        .required("Campo obrigatório."),
      deliveryComplement: Yup.string(),
      cardName: Yup.string().required("Campo obrigatório."),
      cardNumber: Yup.string()
        .length(19, "Número do cartão inválido.")
        .required("Campo obrigatório."),
      cardCvv: Yup.string().required("Campo obrigatório."),
      cardExpiryMonth: Yup.number()
        .min(1, "Mês entre '01' e '12'.")
        .max(12, "Mês entre '01' e '12'.")
        .required("Campo obrigatório."),
      cardExpiryYear: Yup.number()
        .min(
          new Date().getFullYear(),
          `Ano maior ou igual à '${new Date().getFullYear()}'`
        )
        .required("Campo obrigatório."),
    }),
    onSubmit: (values, { resetForm }) => {
      if (!form.isValid) {
        return;
      }

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

  const isInputInvalid = (field: string) => {
    const isTouched = field in form.touched;
    const isInvalid = field in form.errors;

    return isTouched && isInvalid;
  };

  const canGoToPayment = () => {
    return (
      form.dirty &&
      !("deliveryName" in form.errors) &&
      !("deliveryAdress" in form.errors) &&
      !("deliveryCity" in form.errors) &&
      !("deliveryCep" in form.errors) &&
      !("deliveryNumber" in form.errors) &&
      !("deliveryComplement" in form.errors)
    );
  };

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
                    className={
                      isInputInvalid("deliveryName") ? "input-invalid" : ""
                    }
                  />
                  {isInputInvalid("deliveryName") && (
                    <small>{form.errors.deliveryName}</small>
                  )}
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
                    className={
                      isInputInvalid("deliveryAdress") ? "input-invalid" : ""
                    }
                  />
                  {isInputInvalid("deliveryAdress") && (
                    <small>{form.errors.deliveryAdress}</small>
                  )}
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
                    className={
                      isInputInvalid("deliveryCity") ? "input-invalid" : ""
                    }
                  />
                  {isInputInvalid("deliveryCity") && (
                    <small>{form.errors.deliveryCity}</small>
                  )}
                </CartFormInputGroup>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup>
                    <label htmlFor="deliveryCep">CEP</label>
                    <ReactInputMask
                      mask="99999-999"
                      maskChar=""
                      id="deliveryCep"
                      type="text"
                      name="deliveryCep"
                      value={form.values.deliveryCep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        isInputInvalid("deliveryCep") ? "input-invalid" : ""
                      }
                    />
                    {isInputInvalid("deliveryCep") && (
                      <small>{form.errors.deliveryCep}</small>
                    )}
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="deliveryNumber">Número</label>
                    <input
                      id="deliveryNumber"
                      type="number"
                      name="deliveryNumber"
                      value={form.values.deliveryNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        isInputInvalid("deliveryNumber") ? "input-invalid" : ""
                      }
                    />
                    {isInputInvalid("deliveryNumber") && (
                      <small>{form.errors.deliveryNumber}</small>
                    )}
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
                    disabled={!canGoToPayment()}
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
                    className={
                      isInputInvalid("cardName") ? "input-invalid" : ""
                    }
                  />
                  {isInputInvalid("cardName") && (
                    <small>{form.errors.cardName}</small>
                  )}
                </CartFormInputGroup>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup $grow="3">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <ReactInputMask
                      mask="9999 9999 9999 9999"
                      maskChar=""
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        isInputInvalid("cardNumber") ? "input-invalid" : ""
                      }
                    />
                    {isInputInvalid("cardNumber") && (
                      <small>{form.errors.cardNumber}</small>
                    )}
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="cardCvv">CVV</label>
                    <ReactInputMask
                      mask="999"
                      maskChar=""
                      id="cardCvv"
                      type="text"
                      name="cardCvv"
                      value={form.values.cardCvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        isInputInvalid("cardCvv") ? "input-invalid" : ""
                      }
                    />
                    {isInputInvalid("cardCvv") && (
                      <small>{form.errors.cardCvv}</small>
                    )}
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>
                <CartFormInputMultipleGroups>
                  <CartFormInputGroup>
                    <label htmlFor="cardExpiryMonth">Mês de vencimento</label>
                    <ReactInputMask
                      mask="99"
                      maskChar=""
                      id="cardExpiryMonth"
                      type="text"
                      name="cardExpiryMonth"
                      value={form.values.cardExpiryMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        isInputInvalid("cardExpiryMonth") ? "input-invalid" : ""
                      }
                    />
                    {isInputInvalid("cardExpiryMonth") && (
                      <small>{form.errors.cardExpiryMonth}</small>
                    )}
                  </CartFormInputGroup>
                  <CartFormInputGroup>
                    <label htmlFor="cardExpiryYear">Ano de vencimento</label>
                    <ReactInputMask
                      mask="9999"
                      maskChar=""
                      id="cardExpiryYear"
                      type="text"
                      name="cardExpiryYear"
                      value={form.values.cardExpiryYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        isInputInvalid("cardExpiryYear") ? "input-invalid" : ""
                      }
                    />
                    {isInputInvalid("cardExpiryYear") && (
                      <small>{form.errors.cardExpiryYear}</small>
                    )}
                  </CartFormInputGroup>
                </CartFormInputMultipleGroups>

                <CartFormActions>
                  <Button
                    $variant="secondary"
                    type="button"
                    disabled={!form.isValid}
                    submit
                  >
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
