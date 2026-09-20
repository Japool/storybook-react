import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   */
  variant?: "primary" | "secondary" | "outline";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const classNames = [styles.button, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} type="button" className={classNames} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
