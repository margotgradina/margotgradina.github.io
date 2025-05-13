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

  return (
    <section
      id={id}
      className={css`
        /* height: 100vh; */

        width: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: #434343; */
        padding: 0 3rem 2rem 2rem;
        box-sizing: border-box;

        transition: opacity 1.8s ease;
        opacity: ${upcomingSection == id || currentSection == id ? 1 : 0}; /* Fade-in/out based on active section */
        visibility: ${upcomingSection == id || currentSection == id ? "visible" : "hidden"}; /* Hide section when not ac*/
      `}
    >
      <h2
        className={css`
          font-size: 2.5rem;
          margin-bottom: 1rem;
          /* background-color: yellow; */
          height: 20%;
          align-content: center;
        `}
      >
        {title}
      </h2>
      <div
        className={css`
          /* width: 100%; */
          height: 100%;
          margin-right: 20rem;
          margin-left: 15rem;
          /* background-color: aqua; */
          overflow-y: auto;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
