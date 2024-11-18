import { ButtonWrapper, LinkWrapper } from "./styles";

export type ButtonProps = {
  $variant?: "primary" | "secondary";
  children: string;
  onClick?: () => void;
  size?: "full" | "content";
  type?: "link" | "button";
  to?: string;
  submit?: boolean;
  disabled?: boolean;
};

const Button = ({
  $variant: variant = "primary",
  children,
  onClick,
  size = "full",
  type = "button",
  to,
  submit = false,
  disabled,
}: ButtonProps) => {
  if (type === "button") {
    return (
      <ButtonWrapper
        type={submit ? "submit" : "button"}
        $variant={variant}
        onClick={onClick}
        size={size}
        disabled={disabled}
      >
        {children}
      </ButtonWrapper>
    );
  }

  return (
    <LinkWrapper $variant={variant} to={to!} size={size}>
      {children}
    </LinkWrapper>
  );
};

export default Button;
