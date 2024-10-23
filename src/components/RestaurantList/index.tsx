import Restaurant from "../Restaurant";
import { RestaurantListWrapper } from "./styles";

const RestaurantList = () => (
  <div className="container">
    <RestaurantListWrapper>
      <Restaurant></Restaurant>
      <Restaurant></Restaurant>
      <Restaurant></Restaurant>
      <Restaurant></Restaurant>
    </RestaurantListWrapper>
  </div>
);

export default RestaurantList;
