import { useEffect, useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import RestaurantList from "../../components/RestaurantList";
import { Restaurant } from "../../models/restaurant";

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurants(res));
  }, []);

  if (!restaurants) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <HomeHeader />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Home;
