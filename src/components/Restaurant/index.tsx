import {
  RestaurantCard,
  RestaurantCardButton,
  RestaurantCardDescription,
  RestaurantCardImageWrapper,
  RestaurantCardInfo,
  RestaurantCardTags,
  RestaurantCardTitle,
  RestaurantTag,
} from "./styles";

import img from "../../assets/images/dolce_vita_trattoria.png";
import { Link } from "react-router-dom";

const Restaurant = () => (
  <RestaurantCard>
    <RestaurantCardImageWrapper>
      <img src={img} alt="restaurant" />
      <RestaurantCardTags>
        <RestaurantTag>Destaque da semana</RestaurantTag>
        <RestaurantTag>Comida italiana</RestaurantTag>
      </RestaurantCardTags>
    </RestaurantCardImageWrapper>
    <RestaurantCardTitle>
      <p>Nome do restaurante</p>
      <span>4.9 ⭐</span>
    </RestaurantCardTitle>
    <RestaurantCardInfo>
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
  </RestaurantCard>
);

export default Restaurant;
