import {css} from "@emotion/css";
import {useEffect} from "react";

const SectionWrapper = ({
  id,
  title,
  upcomingSection,
  currentSection,
  children,
}: {
  id: string;
  title: string;
  upcomingSection: string;
  currentSection: string;
  children: React.ReactNode;
}) => {
  useEffect(() => {}, [upcomingSection]);

  console.log(upcomingSection, currentSection);

  return (
    <section
      id={id}
      className={css`
        height: 100vh; /* Full height of the viewport */
        width: 100vw; /* Full width of the viewport */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center content vertically */
        align-items: center; /* Center content horizontally */
        background-color: #f0f0f0; /* Light background color */
        padding: 2rem; /* Padding around the section */
        box-sizing: border-box;
        overflow-y: auto; /* Allow scrolling if content overflows */
        transition: opacity 1.5s ease;
        opacity: ${upcomingSection == id || currentSection == id ? 1 : 0}; /* Fade-in/out based on active section */
        visibility: ${upcomingSection == id || currentSection == id ? "visible" : "hidden"}; /* Hide section when not ac*/
      `}
    >
      <h2
        className={css`
          font-size: 2.5rem;
          margin-bottom: 1rem;
        `}
      >
        {title}
      </h2>
      <div
        className={css`
          width: 100%;
          height: 100%;
          overflow-y: auto;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
