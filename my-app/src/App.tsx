import {useEffect, useRef, useState} from "react";
import "./App.css";
import {css} from "@emotion/css";
import MenuTab from "./components/general/MenuTab";
import About from "./components/scrollsections/about";
import Projects from "./components/scrollsections/projects";
import Contact from "./components/scrollsections/contact";
import HomeSection from "./components/scrollsections/home";
import Header from "./components/general/Header_v2";
import SectionWrapper from "./components/scrollsections/sectionWrapper";

const fadeInVisibleClass = css`
  opacity: 1;
`;

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<string>("home");
  const [upcomingSection, setUpcomingSection] = useState<string>("home");

  //these are the observers for the fading effects for header +sections
  useEffect(() => {
    document.title = "Margot Gradina";

    const sections = document.querySelectorAll("section");

    const observerCurrent = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {threshold: 0.6} // 60% visible = active
    );

    const observerUpcoming = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setUpcomingSection(entry.target.id);
          }
        });
      },
      {threshold: 0.2} // 10% visible = active
    );

    sections.forEach((section) => {
      observerCurrent.observe(section);
      observerUpcoming.observe(section);
    });
    return () => {
      observerCurrent.disconnect();
      observerUpcoming.disconnect();
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setCurrentSection(ref?.current?.id as string);
    setUpcomingSection(ref?.current?.id as string);
    ref.current?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div
      className={css`
        font-family: "Raleway", sans-serif;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        className={css`
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 10;
        `}
      >
        <Header onClick={() => scrollToSection(homeRef)} currentSection={currentSection} upcomingSection={upcomingSection} />
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          scroll-behavior: smooth;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <div ref={homeRef}>
          <HomeSection />
        </div>
        <div ref={aboutRef}>
          <SectionWrapper id="about" title="About me" upcomingSection={upcomingSection} currentSection={currentSection}>
            <About />
          </SectionWrapper>
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>

      <div
        className={css`
          position: fixed;
          bottom: 1rem;
          width: vw;

          right: 1rem;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          z-index: 10;
          /* flex-wrap: wrap; */

          @media (max-width: 768px) {
            flex-direction: row;
            right: 0.5rem;
            bottom: 0.5rem;
          }
        `}
      >
        <MenuTab tabName="HOME" onClick={() => scrollToSection(homeRef)} />
        <MenuTab tabName="ABOUT" onClick={() => scrollToSection(aboutRef)} />
        <MenuTab tabName="PROJECTS" onClick={() => scrollToSection(projectsRef)} />
        <MenuTab tabName="CONTACT" onClick={() => scrollToSection(contactRef)} />
      </div>
    </div>
  );
};

export default App;
