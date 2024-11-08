import { RestaurantHeaderLink, RestaurantHeaderWrapper } from "./styles";

import { Link } from "react-router-dom";
import hero from "../../assets/images/hero_bg.svg";
import logo from "../../assets/images/logo.png";
import Icon from "../Icon";

const RestaurantHeader = () => (
  <RestaurantHeaderWrapper style={{ backgroundImage: `url(${hero})` }}>
    <div className="container">
      <Link to="/">
        <RestaurantHeaderLink>
          <Icon icon="angle-left" />
          <p>Restaurantes</p>
        </RestaurantHeaderLink>
      </Link>
      <img src={logo} alt="efood" />
      <RestaurantHeaderLink>
        <Icon icon="cart-shopping" />
        <p>0 produtos</p>
      </RestaurantHeaderLink>
    </div>
  </RestaurantHeaderWrapper>
);

export default RestaurantHeader;
