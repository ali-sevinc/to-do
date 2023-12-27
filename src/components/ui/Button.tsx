import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  model?: "primary" | "secondary" | "transparent";
  size?: "small" | "base" | "big";
};

const buttonModels = {
  primary:
    "bg-stone-700 text-stone-100 border border-stone-900 hover:bg-stone-800 duration-200",
  secondary:
    "bg-stone-300 hover:bg-stone-400 hover:text-stone-900 duration-200",
  transparent: "text-stone-700 hover:scale-105 duration-200",
};

const buttonSizes = {
  small: "text-sm rounded px-4 py-2 font-semibold",
  base: "text-xl rounded-xl px-8 py-4 font-bold tracking-wider",
  big: "text-2xl rounded-2xl px-10 py-5 font-bold tracking-widest",
};

export default function Button({
  children,
  onClick,
  type = "button",
  model = "primary",
  size = "base",
}: PropsType) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      type={type}
      className={`flex items-center justify-center gap-4 ${buttonModels[model]} ${buttonSizes[size]}`}
    >
      {children}
    </button>
  );
}
