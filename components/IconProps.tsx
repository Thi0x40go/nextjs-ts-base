import React from "react";

type IconProps = {
  name: string;
  title?: string;
  color?: string;
  size?: number | string;
  className?: string;
  decorative: true;
  style?: React.CSSProperties;
};

export default function Icon({
  name,
  size = `1.3em`,
  color = "currentColor",
  className,
  title,
  decorative = true,
  style,
}: IconProps) {
  const ariaProps = decorative
    ? { "aria-hidden": true }
    : { role: "img", "aria-label": title || name };

  return (
    <svg 
      {...ariaProps}
      width={size} 
      height={size} 
      className={className} 
      style={{ fill: color, ...style }}
    >
      {title && !decorative && <title>{title}</title>}
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}
