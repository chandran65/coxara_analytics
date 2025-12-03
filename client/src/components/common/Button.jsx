const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
