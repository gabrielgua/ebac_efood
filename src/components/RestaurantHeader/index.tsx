import { RestaurantHeaderLink, RestaurantHeaderWrapper } from "./styles";

import { Link } from "react-router-dom";
import hero from "../../assets/images/hero_bg.svg";
import logo from "../../assets/images/logo.png";
import Icon from "../Icon";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";

const RestaurantHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const openCart = () => dispatch(open());

  return (
    <RestaurantHeaderWrapper style={{ backgroundImage: `url(${hero})` }}>
      <div className="container">
        <Link to="/">
          <RestaurantHeaderLink>
            <Icon icon="angle-left" />
            <p>Restaurantes</p>
          </RestaurantHeaderLink>
        </Link>
        <img src={logo} alt="efood" />
        <RestaurantHeaderLink onClick={openCart}>
          <Icon icon="cart-shopping" />
          <p>
            {items.length} {items.length === 1 ? "produto" : "produtos"}
          </p>
        </RestaurantHeaderLink>
      </div>
    </RestaurantHeaderWrapper>
  );
};

export default RestaurantHeader;
