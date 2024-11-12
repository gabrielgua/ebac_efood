import {
  ProductCardButton,
  ProductCardDescription,
  ProductCardImg,
  ProductCardName,
  ProductCardWrapper,
} from "./styles";

import { Product } from "../../models/restaurant";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => (
  <>
    <ProductCardWrapper>
      <ProductCardImg src={product.foto} alt="pizza marguerita" />
      <ProductCardName>{product.nome}</ProductCardName>
      <ProductCardDescription>{product.descricao}</ProductCardDescription>
      <ProductCardButton type="button" onClick={onClick}>
        Mais detalhes
      </ProductCardButton>
    </ProductCardWrapper>
  </>
);

export default ProductCard;
