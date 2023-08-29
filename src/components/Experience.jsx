// Components
import { Tag } from "./common";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

// Icons
import { Ebazaar, Pinecone } from "../assets/icons";

export function Experience() {
  const { theme } = useThemeContext();

  return (
    <section id="experience" className={`experience ${theme}`}>
      <div className="container experience__container">
        <div className={`experience__header ${theme}`}>
          <Tag>Experience/Education</Tag>
          <p>Here is a quick summary of my education and work experience:</p>
        </div>

        <div className={`experience__card ${theme}`}>
          <div className="logo">
            <Ebazaar />
          </div>

          <div className="job-detail">
            <h3 className="title">Jr. Frontend Developer</h3>
            <ul>
              <li>Worked on Admin Backoffice and Public website frontend</li>
              <li>Developed 3 new modules for Backoffice</li>
              <li>Implemented new UI design for Backoffice</li>
              <li>Upgraded Backoffice from version 1 to version 2</li>
            </ul>
          </div>

          <p className="date">May 2023 - Aug 2023</p>
        </div>

        <div className={`experience__card ${theme}`}>
          <div className="logo">
            <Pinecone />
          </div>

          <div className="job-detail">
            <h3 className="title">Pinecone Academy</h3>
            <ul>
              <li>Learned all necessary skills for FullStack Development</li>
              <li>
                Developed LMS(Learning Management System) before graduating
              </li>
            </ul>
          </div>

          <p className="date">Sept 2022 - May 2023</p>
        </div>

        <div className={`experience__card ${theme}`}>
          <div className="logo"></div>

          <div className="job-detail">
            <h3 className="title">Fox Valley Technical College</h3>
            <ul>
              <li>Earned Associage Degree of Software Development</li>
              <li>Graduated with 3.5GPA</li>
            </ul>
          </div>

          <p className="date">Feb 2020 - Feb 2023</p>
        </div>
      </div>
    </section>
  );
}
