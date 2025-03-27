interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  asLink?: string;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  asLink,
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 md:px-8 md:py-3 rounded-full transition-all text-base md:text-lg font-medium cursor-pointer";
  const variants = {
    primary: "bg-[#007CF0] hover:bg-[#0070d8] text-white",
    outline: "border-2 border-[#00DFD8] text-[#00DFD8] hover:bg-[#00DFD8]/10",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (asLink) {
      window.open(asLink, "_blank");
    }
    onClick?.(e);
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
