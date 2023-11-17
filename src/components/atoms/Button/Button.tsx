// import clsx, { ClassValue } from "clsx";
import { tv } from "tailwind-variants";

export type ButtonColor = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
}

export const buttonParentClasses = tv({
  base: [
    "c-button",
    "inline-block",
    "shadow-md",
    "transition-colors",
    "rounded-lg",
    "font-bold tracking-wide",
  ],
  variants: {
    color: {
      primary: ["bg-primary-400", "hover:bg-primary-200"],
      secondary: ["bg-secondary-400", "hover:bg-secondary-200"],
    },
  },
});

export const buttonContentClasses = tv({
  base: ["c-button__label", "flex", "px-6", "py-3"],
});

export function Button({ children, color = "primary", onClick }: ButtonProps) {
  return (
    <button className={buttonParentClasses({ color })} onClick={onClick}>
      <span className={buttonContentClasses()}>{children}</span>
    </button>
  );
}
