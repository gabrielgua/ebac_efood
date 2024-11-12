import {
  ProductCardDescription,
  ProductCardImg,
  ProductCardName,
  ProductCardWrapper,
} from "./styles";

import { Product } from "../../models/restaurant";
import Button from "../Button";

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
      <Button onClick={onClick} variant="secondary">
        Mais detalhes
      </Button>
    </ProductCardWrapper>
  </>
);

export default ProductCard;
