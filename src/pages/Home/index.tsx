import { useEffect, useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import RestaurantList from "../../components/RestaurantList";
import { Restaurant } from "../../models/restaurant";
import { useGetRestaurantsQuery } from "../../services/api";

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

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
