import React from "react";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
const Button = ({
  primary = false,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-red-500" : "bg-green-500";
  return (
    <button
      type="button"
      className={["p-4 text-black rounded-md", mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
