import { useThemeContext } from "../../hooks/useThemeContext";

export function IconButton({
  size = "md",
  children,
  className,
  ...otherProps
}) {
  const { theme } = useThemeContext();

  return (
    <button
      className={`icon-button ${size} ${theme} ${className}`}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
}
