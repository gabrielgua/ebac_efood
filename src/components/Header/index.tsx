import { HeaderText, HeaderWrapper } from "./styles";

import headerHero from "../../assets/images/hero_bg.svg";
import headerLogo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderWrapper style={{ backgroundImage: `url(${headerHero})` }}>
      <img src={headerLogo} alt="efood" />

      <HeaderText>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
