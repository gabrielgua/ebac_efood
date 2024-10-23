import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/instagram_logo.png";
import facebook from "../../assets/images/facebook_logo.png";
import twitter from "../../assets/images/twitter_logo.png";
import { FooterLinks, FooterLogo, FooterText, FooterWrapper } from "./styles";

const Footer = () => (
  <FooterWrapper>
    <FooterLogo src={logo} alt="efood" />

    <FooterLinks>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
    </FooterLinks>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </FooterText>
  </FooterWrapper>
);

export default Footer;
