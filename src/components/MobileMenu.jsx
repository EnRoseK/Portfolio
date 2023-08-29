// Icons
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

// Components
import { Button, IconButton } from "./common";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

// Packages
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export function MobileMenu({ closeHandler, show, menuItems, downloadCV }) {
  const { theme, changeTheme } = useThemeContext();
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    shouldRender && (
      <div
        onAnimationEnd={onAnimationEnd}
        className={`mobile-menu ${theme} ${show ? "show" : "hide"}`}
        onClick={closeHandler}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`mobile-menu__container ${theme}`}
        >
          <div className={`mobile-menu__logo ${theme}`}>
            <h3 onClick={scrollToTop}>{`<JA />`}</h3>

            <IconButton onClick={closeHandler}>
              <AiOutlineClose />
            </IconButton>
          </div>

          <nav className={`mobile-menu__links ${theme}`}>
            {menuItems.map((item) => {
              return (
                <Link
                  key={`mobile-menu-item-${item.id}`}
                  className="link-item"
                  to={item.path}
                  smooth={true}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className={`mobile-menu__actions ${theme}`}>
            <div className="switch-theme">
              <span>Switch Theme</span>
              <IconButton onClick={changeTheme}>
                {theme === "light" && <HiOutlineSun />}
                {theme === "dark" && <HiOutlineMoon />}
              </IconButton>
            </div>

            <Button onClick={downloadCV} width="100%">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
