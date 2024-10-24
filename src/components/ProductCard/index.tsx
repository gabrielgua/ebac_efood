import {
  ProductCardButton,
  ProductCardDescription,
  ProductCardImg,
  ProductCardName,
  ProductCardWrapper,
} from "./styles";

import productImg from "../../assets/images/produto_img.png";

const ProductCard = () => (
  <ProductCardWrapper>
    <ProductCardImg src={productImg} alt="pizza marguerita" />
    <ProductCardName>Nome do produto</ProductCardName>
    <ProductCardDescription>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae repellat,
      nisi, a quibusdam iusto.
    </ProductCardDescription>
    <ProductCardButton type="button">Adicionar ao carrinho</ProductCardButton>
  </ProductCardWrapper>
);

export default ProductCard;
