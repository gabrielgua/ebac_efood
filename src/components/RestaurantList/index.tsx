import { Restaurant } from "../../models/restaurant";
import RestaurantCard from "../RestaurantCard";
import { RestaurantListWrapper } from "./styles";

type RestaurantListProps = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: RestaurantListProps) => (
  <div className="container">
    <RestaurantListWrapper>
      {restaurants.map((r) => (
        <li key={r.id}>
          <RestaurantCard restaurant={r} />
        </li>
      ))}
    </RestaurantListWrapper>
  </div>
);

export default RestaurantList;
