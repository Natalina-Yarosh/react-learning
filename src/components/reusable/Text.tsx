import { FC, ReactNode } from "react";

type TextProps = {
  tag?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};
/**
 * A simple component that wraps its children in a HTML element with the given tag.
 * @param tag The HTML tag to use. Defaults to "div".
 * @param children The content to render.
 * @returns A JSX element with the given tag and children.
 */
export const Text: FC<TextProps> = ({ tag, children }) => {
  switch (tag) {
    case "div":
      return <div>{children}</div>;
    case "p":
      return <p>{children}</p>;
    case "span":
      return <span>{children}</span>;
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    default:
      return <div>{children}</div>;
  }
};
