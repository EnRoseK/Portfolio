// Components
import { Tag } from "./common";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

// Images
import picture from "../assets/img/picture.jpeg";

export function About() {
  const { theme } = useThemeContext();

  return (
    <section id="about" className={`about ${theme}`}>
      <div className="container about__container">
        <Tag>About me</Tag>

        <div className="about__content">
          <div className="about__picture">
            <div className="picture-container">
              <div className={`picture ${theme}`}>
                <img src={picture} alt="Javkhlant Altankhuyag" />
              </div>

              <div className={`background ${theme}`} />
            </div>
          </div>

          <div className="about__text">
            <h2 className={`title ${theme}`}>
              Curious about me? Here you have it:
            </h2>

            <p className={`description ${theme}`}>
              I am a passionate developer who specializes in full stack
              development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>

            <p className={`description ${theme}`}>
              I began my journey as a web developer in 2020, and since then, I
              have continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my mid twenties, 3 years after starting my web development
              journey, and graduating from FVTC and Pinecone Academy, I am
              building cutting-edge web applications using modern technologies
              such as Next.js, TypeScript, Nestjs, TailwindCSS and much more.
            </p>

            <p className={`description ${theme}`}>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
