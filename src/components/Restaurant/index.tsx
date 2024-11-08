import restaurantImgHeader from "../../assets/images/dolce_vita_trattoria_hero.png";
import { Restaurant as RestaurantType } from "../../models/restaurant";
import ProductCard from "../ProductCard";
import RestaurantBanner from "../RestaurantBanner";
import { ProductList } from "./styles";

type RestaurantProps = {
  restaurant: RestaurantType;
};

const Restaurant = ({ restaurant }: RestaurantProps) => (
  <section>
    <RestaurantBanner
      img={restaurant.capa}
      category={restaurant.tipo}
      name={restaurant.titulo}
    />
    <ProductList className="container">
      {restaurant.cardapio.map((p) => (
        <li key={p.id}>
          <ProductCard product={p}></ProductCard>
        </li>
      ))}
    </ProductList>
  </section>
);

export default Restaurant;
