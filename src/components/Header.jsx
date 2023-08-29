// Components
import { IconButton, Button } from "./common";
import { MobileMenu } from "./MobileMenu";

// Icons
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

// Packages
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const menuItems = [
  { id: 1, title: "About", path: "about" },
  { id: 2, title: "Skills", path: "skills" },
  { id: 3, title: "Experience", path: "experience" },
  { id: 4, title: "Contact", path: "contact" },
];

export function Header() {
  const { theme, changeTheme } = useThemeContext();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const downloadCV = () => {
    window.location = "/resume.pdf";
  };

  return (
    <header className={`header ${theme}`}>
      <div className="container header__container">
        <h1
          className={`header__logo ${theme}`}
          onClick={scrollToTop}
        >{`<JA />`}</h1>

        <nav className="header__navigation">
          {menuItems.map((item) => {
            return (
              <Link
                key={`menu-item-${item.id}`}
                className={`header__navigation-item ${theme}`}
                to={item.path}
                smooth={true}
              >
                {item.title}
              </Link>
            );
          })}

          <div className={`header__navigation-divider ${theme}`} />

          <div className="header__navigation-actions">
            <IconButton onClick={changeTheme}>
              {theme === "light" && <HiOutlineSun />}
              {theme === "dark" && <HiOutlineMoon />}
            </IconButton>

            <Button onClick={downloadCV}>Download CV</Button>
          </div>
        </nav>

        <IconButton
          onClick={() => {
            setShowMobileMenu(true);
          }}
          className="header__hamburger"
        >
          <RxHamburgerMenu />
        </IconButton>

        <MobileMenu
          downloadCV={downloadCV}
          menuItems={menuItems}
          show={showMobileMenu}
          closeHandler={() => {
            setShowMobileMenu(false);
          }}
        />
      </div>
    </header>
  );
}
