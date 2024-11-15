import { useDispatch } from "react-redux";
import { Product } from "../../models/restaurant";
import Button from "../Button";
import Icon from "../Icon";
import {
  ModalBackdrop,
  ModalCloseButton,
  ModalContent,
  ModalInfo,
  ModalText,
  ModalTitle,
  ModalWrapper,
} from "./styles";
import { add, open } from "../../store/reducers/cart";

export type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose?: () => void;
};

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch(add(product));
    dispatch(open());
    onClose!();
  };

  return (
    <ModalWrapper className={product && isOpen ? "open" : ""}>
      <ModalBackdrop onClick={onClose} />
      <ModalContent className="container">
        <img src={product.foto} alt={`Foto do produto ${product.nome}`} />
        <ModalInfo>
          <ModalTitle>{product.nome}</ModalTitle>
          <ModalText>{product.descricao}</ModalText>
          <ModalText>Serve: {product.porcao}.</ModalText>

          <Button
            $variant="secondary"
            size="content"
            onClick={() => addToCart(product)}
          >
            {`Adicionar ao carrinho - ${formatPrice(product.preco)}`}
          </Button>
        </ModalInfo>
        <ModalCloseButton onClick={onClose}>
          <Icon icon="close" />
        </ModalCloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ProductModal;
