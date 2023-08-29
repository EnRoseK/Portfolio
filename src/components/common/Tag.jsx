import { useThemeContext } from "../../hooks/useThemeContext";

export function Tag({ children, width = "max-content" }) {
  const { theme } = useThemeContext();

  return (
    <div className={`tag ${theme}`} style={{ width }}>
      {children}
    </div>
  );
}
