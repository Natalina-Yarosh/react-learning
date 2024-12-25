import { FC, ReactNode, MouseEventHandler } from "react";

type TextProps = {
  tag?: "div" | "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement | HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement | HTMLAnchorElement>;
};
/**
 * A simple component that wraps its children in a HTML element with the given tag.
 * @param tag The HTML tag to use. Defaults to "div".
 * @param children The content to render.
 * @returns A JSX element with the given tag and children.
 */
export const Text: FC<TextProps> = ({ tag, children, className, onClick }) => {
  const Component = tag || "div";
  return <Component className={className} onClick={onClick}>{children}</Component>;
};

