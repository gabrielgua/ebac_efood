import {
  RestaurantCardDescription,
  RestaurantCardImageWrapper,
  RestaurantCardInfo,
  RestaurantCardRating,
  RestaurantCardTags,
  RestaurantCardTitle,
  RestaurantCardWrapper,
  RestaurantTag,
} from "./styles";

import { Restaurant } from "../../models/restaurant";
import Button from "../Button";
import Icon from "../Icon";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
  <RestaurantCardWrapper>
    <RestaurantCardImageWrapper>
      <img src={restaurant.capa} alt="restaurant" />
      <RestaurantCardTags>
        {restaurant.destacado && (
          <RestaurantTag>Destaque da semana</RestaurantTag>
        )}
        <RestaurantTag>{restaurant.tipo}</RestaurantTag>
      </RestaurantCardTags>
    </RestaurantCardImageWrapper>
    <RestaurantCardInfo>
      <RestaurantCardTitle>
        <p>{restaurant.titulo}</p>
        <RestaurantCardRating>
          <p>{restaurant.avaliacao}</p>
          <Icon icon="star" />
        </RestaurantCardRating>
      </RestaurantCardTitle>
      <RestaurantCardDescription>
        {restaurant.descricao}
      </RestaurantCardDescription>
      <Button type="link" to={`/restaurantes/${restaurant.id}`} size="content">
        Saiba mais
      </Button>
    </RestaurantCardInfo>
  </RestaurantCardWrapper>
);

export default RestaurantCard;
