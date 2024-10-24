import {
  RestarantHeroName,
  RestaurantHeroCategory,
  RestaurantHeroContent,
  RestaurantHeroImg,
  RestaurantHeroWrapper,
} from "./styles";

type RestaurantBannerProps = {
  img: string;
  category: string;
  name: string;
};

const RestaurantBanner = ({ img, category, name }: RestaurantBannerProps) => (
  <RestaurantHeroWrapper>
    <RestaurantHeroImg src={img} alt="dolce vita trattoria" />
    <RestaurantHeroContent className="container">
      <RestaurantHeroCategory>{category}</RestaurantHeroCategory>
      <RestarantHeroName>{name}</RestarantHeroName>
    </RestaurantHeroContent>
  </RestaurantHeroWrapper>
);

export default RestaurantBanner;
