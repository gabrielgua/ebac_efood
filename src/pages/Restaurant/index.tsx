import { useParams } from "react-router-dom";
import RestaurantHeader from "../../components/ProfileHeader";
import Restaurant from "../../components/Restaurant";
import { useEffect, useState } from "react";
import { Restaurant as RestaurantType } from "../../models/restaurant";

const RestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantType>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, []);

  if (!restaurant) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <RestaurantHeader />
      <Restaurant restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;
