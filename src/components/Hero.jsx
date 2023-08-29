// Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

// Components
import { IconButton } from "./common";

// Pictures
import profilePic from "../assets/img/profile.jpeg";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

export function Hero() {
  const { theme } = useThemeContext();

  return (
    <section className={`hero ${theme}`}>
      <div className="container hero__container">
        <div className="hero__left">
          <div className="hero__content">
            <h1 className={`title ${theme}`}>Hi, I’m Javkhlant 👋</h1>
            <p className={`description ${theme}`}>
              I am a full stack developer (React.js & Node.js) with a focus on
              creating exceptional digital experiences that are fast,
              accessible, visually appealing, and responsive. Even though I have
              been creating web applications for over few years, I still love it
              as if it was something new.
            </p>
          </div>

          <div className={`hero__group ${theme}`}>
            <div className="location">
              <HiOutlineLocationMarker />
              <p>Ulaanbaatar, Mongolia</p>
            </div>

            <div className="hire">
              <div className="dot-container">
                <div className="dot" />
              </div>
              <p>Available for work</p>
            </div>
          </div>

          <div className="hero__actions">
            <a
              href="https://github.com/EnRoseK"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <FiGithub />
              </IconButton>
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__picture-container">
            <div className={`picture ${theme}`}>
              <img src={profilePic} alt="Javkhlant Altankhuyag" />
            </div>

            <div className={`background ${theme}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
