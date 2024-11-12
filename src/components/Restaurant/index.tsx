import { useState } from "react";
import { Product, Restaurant as RestaurantType } from "../../models/restaurant";
import ProductModal, { ProductModalProps } from "../Modal";
import ProductCard from "../ProductCard";
import RestaurantBanner from "../RestaurantBanner";
import { ProductList } from "./styles";

type RestaurantProps = {
  restaurant: RestaurantType;
};

const Restaurant = ({ restaurant }: RestaurantProps) => {
  const [modalProduct, setModalProduct] = useState<ProductModalProps>({
    product: {} as Product,
    isOpen: false,
  });

  const openModal = (product: Product) => {
    setModalProduct({ isOpen: true, product: product });
  };

  const closeModal = () =>
    setModalProduct({ isOpen: false, product: {} as Product });

  return (
    <section>
      <RestaurantBanner
        img={restaurant.capa}
        category={restaurant.tipo}
        name={restaurant.titulo}
      />
      <ProductList className="container">
        {restaurant.cardapio.map((p) => (
          <li key={p.id}>
            <ProductCard product={p} onClick={() => openModal(p)}></ProductCard>
          </li>
        ))}
      </ProductList>
      <ProductModal
        product={modalProduct.product}
        isOpen={modalProduct.isOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Restaurant;
