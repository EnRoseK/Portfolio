// Components
import { Tag } from "./common";

// Icons
import {
  JavaScript,
  TypeScript,
  React,
  Nextjs,
  Nodejs,
  ExpressJS,
  NestJS,
  Sass,
  Tailwind,
  MongoDB,
  Git,
  Php,
  Csharp,
  ReactNative,
  Flutter,
} from "../assets/icons";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";
import MySQL from "../assets/icons/MySQL";

export function Skills() {
  const { theme } = useThemeContext();

  const skills = [
    {
      id: 1,
      title: "JavaScript",
      icon: JavaScript,
    },
    {
      id: 2,
      title: "TypeScript",
      icon: TypeScript,
    },
    {
      id: 3,
      title: "ReactJS",
      icon: React,
    },
    {
      id: 4,
      title: "NextJS",
      icon: Nextjs,
    },
    {
      id: 5,
      title: "NodeJS",
      icon: Nodejs,
    },
    {
      id: 6,
      title: "ExpressJS",
      icon: ExpressJS,
    },
    {
      id: 7,
      title: "NestJS",
      icon: NestJS,
    },
    {
      id: 8,
      title: "Sass/Scss",
      icon: Sass,
    },
    {
      id: 9,
      title: "Tailwind",
      icon: Tailwind,
    },
    {
      id: 10,
      title: "MongoDB",
      icon: MongoDB,
    },
    {
      id: 11,
      title: "Git",
      icon: Git,
    },
    {
      id: 12,
      title: "PHP",
      icon: Php,
    },
    {
      id: 13,
      title: "C#",
      icon: Csharp,
    },
    {
      id: 14,
      title: "MySQL",
      icon: MySQL,
    },
    {
      id: 15,
      title: "React Native",
      icon: ReactNative,
    },
    {
      id: 16,
      title: "Flutter",
      icon: Flutter,
    },
  ];

  return (
    <section id="skills" className={`skills ${theme}`}>
      <div className="container skills__container">
        <div className="skills__header">
          <Tag>Skills</Tag>
          <p className={`subheading ${theme}`}>
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="skills__content">
          <div className="row">
            {skills.map((skill) => {
              return (
                <div key={`skill-${skill.id}`} className={`box ${theme}`}>
                  <skill.icon />
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
