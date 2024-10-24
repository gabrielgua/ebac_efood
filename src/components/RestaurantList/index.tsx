import Restaurant from "../Restaurant";
import { RestaurantListTitle, RestaurantListWrapper } from "./styles";

const RestaurantList = () => (
  <div className="container">
    <RestaurantListTitle>Restaurantes</RestaurantListTitle>
    <RestaurantListWrapper>
      <Restaurant></Restaurant>
      <Restaurant></Restaurant>
      <Restaurant></Restaurant>
      <Restaurant></Restaurant>
    </RestaurantListWrapper>
  </div>
);

export default RestaurantList;
