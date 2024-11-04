import {
  RestaurantCardWrapper,
  RestaurantCardButton,
  RestaurantCardDescription,
  RestaurantCardImageWrapper,
  RestaurantCardInfo,
  RestaurantCardTags,
  RestaurantCardTitle,
  RestaurantTag,
  RestaurantCardRating,
} from "./styles";

import img from "../../assets/images/dolce_vita_trattoria.png";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const RestaurantCard = () => (
  <RestaurantCardWrapper>
    <RestaurantCardImageWrapper>
      <img src={img} alt="restaurant" />
      <RestaurantCardTags>
        <RestaurantTag>Destaque da semana</RestaurantTag>
        <RestaurantTag>Comida italiana</RestaurantTag>
      </RestaurantCardTags>
    </RestaurantCardImageWrapper>
    <RestaurantCardInfo>
      <RestaurantCardTitle>
        <p>Nome do restaurante</p>
        <RestaurantCardRating>
          <p>4.9</p>
          <Icon icon="star" />
        </RestaurantCardRating>
      </RestaurantCardTitle>
      <RestaurantCardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi
        impedit possimus eius adipisci nam vero ipsum earum assumenda pariatur!
        Perferendis corporis rem quisquam harum quibusdam quasi natus,
        doloremque libero.
      </RestaurantCardDescription>
      <Link to="/profile">
        <RestaurantCardButton>Saiba mais</RestaurantCardButton>
      </Link>
    </RestaurantCardInfo>
  </RestaurantCardWrapper>
);

export default RestaurantCard;
