import {useEffect, useRef, useState} from "react";
import "./App.css";
import {css} from "@emotion/css";
import MenuTab from "./components/general/MenuTab";
import About from "./components/scrollsections/about";
import Projects from "./components/scrollsections/projects";
import Contact from "./components/scrollsections/contact";
import HomeSection from "./components/scrollsections/home";
import Header from "./components/general/Header_v2";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {threshold: 0.6} // 60% visible = active
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = "Margot Gradina";
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
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
        <Header onClick={() => scrollToSection(homeRef)} currentSection={currentSection} />
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          scroll-behavior: smooth;
          padding-top: 5vh;
          height: 100vh;
        `}
      >
        <div ref={homeRef}>
          <HomeSection />
        </div>
        <div ref={aboutRef}>
          <About />
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
          right: 1rem;
          display: flex;
          gap: 1rem;
          z-index: 10;
          flex-wrap: wrap;

          @media (max-width: 768px) {
            flex-direction: column;
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
