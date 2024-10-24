import RestaurantCard from "../RestaurantCard";
import { RestaurantListTitle, RestaurantListWrapper } from "./styles";

const RestaurantList = () => (
  <div className="container">
    <RestaurantListTitle>Restaurantes</RestaurantListTitle>
    <RestaurantListWrapper>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
    </RestaurantListWrapper>
  </div>
);

export default RestaurantList;
