import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = {
  icon: IconProp;
};

const Icon = ({ icon }: IconProps) => <FontAwesomeIcon icon={icon} />;

export default Icon;
