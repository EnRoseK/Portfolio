// Components
import { Tag } from "./common";

// Icons
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

export function Contact() {
  const { theme } = useThemeContext();

  return (
    <section id="contact" className={`contact ${theme}`}>
      <div className="container contact__container">
        <div className={`contact__header ${theme}`}>
          <Tag>Get in Touch</Tag>
          <p>
            Feel free to reach out to me if youre looking for a developer, have
            a query, or simply want to connect.
          </p>
        </div>

        <div className={`contact__content ${theme}`}>
          <div className="row">
            <AiOutlineMail />
            <h2>enrosek95@gmail.com</h2>
          </div>

          <div className="row">
            <AiOutlinePhone />
            <h2>+976 88916562</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
