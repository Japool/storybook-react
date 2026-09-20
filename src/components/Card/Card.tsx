import React from "react";
import styles from "./Card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title text of the card
   */
  title?: string;
  /**
   * Whether the card shows a hover shadow effect
   */
  hoverable?: boolean;
  /**
   * Content inside the card
   */
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  hoverable = true,
  className = "",
  children,
  ...props
}) => {
  const classNames = [styles.card, hoverable ? styles.hoverable : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
