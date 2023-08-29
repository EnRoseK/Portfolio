import { useThemeContext } from "../../hooks/useThemeContext";

export function Button({
  width = "max-content",
  type = "button",
  children,
  ...otherProps
}) {
  const { theme } = useThemeContext();

  return (
    <button
      className={`button ${theme}`}
      type={type}
      style={{ width }}
      {...otherProps}
    >
      {children}
    </button>
  );
}
