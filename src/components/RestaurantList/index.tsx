import RestaurantCard from "../RestaurantCard";
import { RestaurantListWrapper } from "./styles";

const RestaurantList = () => (
  <div className="container">
    <RestaurantListWrapper>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
      <RestaurantCard></RestaurantCard>
    </RestaurantListWrapper>
  </div>
);

export default RestaurantList;
