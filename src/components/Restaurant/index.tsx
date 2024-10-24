import restaurantImgHeader from "../../assets/images/dolce_vita_trattoria_hero.png";
import ProductCard from "../ProductCard";
import RestaurantBanner from "../RestaurantBanner";
import { ProductList } from "./styles";

const Restaurant = () => (
  <section>
    <RestaurantBanner
      img={restaurantImgHeader}
      category="Italiana"
      name="La Dolce Vita Trattoria"
    />
    <ProductList className="container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductList>
  </section>
);

export default Restaurant;
