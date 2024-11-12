import { ButtonWrapper, LinkWrapper } from "./styles";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  children: string;
  onClick?: () => void;
  size?: "full" | "content";
  type?: "link" | "button";
  to?: string;
};

const Button = ({
  variant = "primary",
  children,
  onClick,
  size = "full",
  type = "button",
  to,
}: ButtonProps) => {
  if (type === "button") {
    return (
      <ButtonWrapper variant={variant} onClick={onClick} size={size}>
        {children}
      </ButtonWrapper>
    );
  }

  return (
    <LinkWrapper variant={variant} to={to!} size={size}>
      {children}
    </LinkWrapper>
  );
};

export default Button;
