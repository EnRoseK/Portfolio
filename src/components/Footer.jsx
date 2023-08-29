// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

export function Footer() {
  const { theme } = useThemeContext();

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <p className={`footer__text ${theme}`}>
          &copy; 2023 | Javkhlant Altankhuyag
        </p>
      </div>
    </footer>
  );
}
