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

export type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose?: () => void;
};

const formatPrice = (price = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => (
  <ModalWrapper className={product && isOpen ? "open" : ""}>
    <ModalBackdrop onClick={onClose} />
    <ModalContent className="container">
      <img src={product.foto} alt={`Foto do produto ${product.nome}`} />
      <ModalInfo>
        <ModalTitle>{product.nome}</ModalTitle>
        <ModalText>{product.descricao}</ModalText>
        <ModalText>Serve: {product.porcao}.</ModalText>

        <Button variant="secondary" size="content">
          {`Adicionar ao carrinho - ${formatPrice(product.preco)}`}
        </Button>
      </ModalInfo>
      <ModalCloseButton onClick={onClose}>
        <Icon icon="close" />
      </ModalCloseButton>
    </ModalContent>
  </ModalWrapper>
);

export default ProductModal;
