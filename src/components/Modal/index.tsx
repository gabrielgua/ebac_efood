import { Product } from "../../models/restaurant";
import Icon from "../Icon";
import { ProductCardButton } from "../ProductCard/styles";
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

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => (
  <ModalWrapper className={product && isOpen ? "open" : ""}>
    <ModalBackdrop onClick={onClose} />
    <ModalContent className="container">
      <img src={product.foto} alt={`Foto do produto ${product.nome}`} />
      <ModalInfo>
        <ModalTitle>{product.nome}</ModalTitle>
        <ModalText>{product.descricao}</ModalText>
        <ModalText>Serve: {product.porcao}.</ModalText>

        <ProductCardButton>
          Adicionar ao carrinho - R$ {product.preco}
        </ProductCardButton>
      </ModalInfo>
      <ModalCloseButton onClick={onClose}>
        <Icon icon="close" />
      </ModalCloseButton>
    </ModalContent>
  </ModalWrapper>
);

export default ProductModal;
