import { useParams } from "react-router-dom";
import RestaurantHeader from "../../components/ProfileHeader";
import Restaurant from "../../components/Restaurant";
import { useEffect, useState } from "react";
import { Restaurant as RestaurantType } from "../../models/restaurant";
import { useGetRestaurantQuery } from "../../services/api";

const RestaurantPage = () => {
  const { id } = useParams();

  const { data: restaurant } = useGetRestaurantQuery(id!);

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
