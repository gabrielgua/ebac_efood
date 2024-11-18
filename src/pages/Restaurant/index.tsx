import { useParams } from "react-router-dom";
import Restaurant from "../../components/Restaurant";
import RestaurantHeader from "../../components/RestaurantHeader";
import { useGetRestaurantQuery } from "../../services/api";
import FullScreenLoader from "../../components/FullScreenLoader";

const RestaurantPage = () => {
  const { id } = useParams();

  const { data: restaurant } = useGetRestaurantQuery(id!);

  if (!restaurant) {
    return <FullScreenLoader />;
  }

  return (
    <>
      <RestaurantHeader />
      <Restaurant restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;
