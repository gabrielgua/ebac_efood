import { ProfileHeaderLink, ProfileHeaderWrapper } from "./styles";

import { Link } from "react-router-dom";
import hero from "../../assets/images/hero_bg.svg";
import logo from "../../assets/images/logo.png";
import Icon from "../Icon";

const ProfileHeader = () => (
  <ProfileHeaderWrapper style={{ backgroundImage: `url(${hero})` }}>
    <div className="container">
      <Link to="/">
        <ProfileHeaderLink>
          <Icon icon="angle-left" />
          <p>Restaurantes</p>
        </ProfileHeaderLink>
      </Link>
      <img src={logo} alt="efood" />
      <ProfileHeaderLink>
        <Icon icon="cart-shopping" />
        <p>0 produtos</p>
      </ProfileHeaderLink>
    </div>
  </ProfileHeaderWrapper>
);

export default ProfileHeader;
