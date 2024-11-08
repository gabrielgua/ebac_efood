import {
  ProductCardButton,
  ProductCardDescription,
  ProductCardImg,
  ProductCardName,
  ProductCardWrapper,
} from "./styles";

import productImg from "../../assets/images/produto_img.png";
import { Product } from "../../models/restaurant";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => (
  <ProductCardWrapper>
    <ProductCardImg src={product.foto} alt="pizza marguerita" />
    <ProductCardName>{product.nome}</ProductCardName>
    <ProductCardDescription>{product.descricao}</ProductCardDescription>
    <ProductCardButton type="button">Mais detalhes</ProductCardButton>
  </ProductCardWrapper>
);

export default ProductCard;
