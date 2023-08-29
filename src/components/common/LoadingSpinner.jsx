import { useThemeContext } from "../../hooks/useThemeContext";

export function LoadingSpinner() {
  const { theme } = useThemeContext();

  return (
    <div className={`loader-container ${theme}`}>
      <span className={`loader ${theme}`}></span>
    </div>
  );
}
