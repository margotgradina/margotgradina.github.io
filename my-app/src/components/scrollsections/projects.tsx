import {useState} from "react";
import {css} from "@emotion/css";

interface Project {
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    title: "Smart Portfolio",
    image: "/images/portfolio.png",
    shortDescription: "A dynamic personal portfolio with React.",
    longDescription:
      "This is a fully responsive portfolio website built using React, TypeScript, and Emotion. It features section-based smooth scrolling and modal project views.",
  },
  {
    title: "Weather Dashboard",
    image: "/images/weather.png",
    shortDescription: "Real-time weather insights using external APIs.",
    longDescription: "Weather dashboard app that fetches live data from OpenWeatherMap API, with a clean UI for current and future forecasts.",
  },
  {
    title: "Chat App",
    image: "/images/chat.png",
    shortDescription: "Real-time messaging app with WebSocket integration.",
    longDescription: "A fully functional chat application built using Node.js, Socket.IO, and React. Includes user authentication and chat rooms.",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className={css`
        width: 100%;
        min-height: 100vh;
        padding: 4rem 2rem;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h2
        className={css`
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #333;
        `}
      >
        Projects
      </h2>

      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 800px;
          width: 100%;
        `}
      >
        <button
          onClick={handlePrev}
          className={css`
            font-size: 2rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 1rem;
          `}
        >
          ‹
        </button>

        <div
          className={css`
            flex: 1;
            text-align: center;
            padding: 1rem;
          `}
        >
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className={css`
              width: 100%;
              max-height: 300px;
              object-fit: cover;
              border-radius: 10px;
            `}
          />
          <h3
            className={css`
              margin-top: 1rem;
              font-size: 1.5rem;
              color: #444;
            `}
          >
            {projects[currentIndex].title}
          </h3>
          <p
            className={css`
              margin: 0.5rem 0;
              color: #666;
            `}
          >
            {projects[currentIndex].shortDescription}
          </p>
          <button
            onClick={() => setActiveProject(projects[currentIndex])}
            className={css`
              margin-top: 0.5rem;
              background-color: #7cc0a0;
              color: white;
              border: none;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              cursor: pointer;
            `}
          >
            More Info
          </button>
        </div>

        <button
          onClick={handleNext}
          className={css`
            font-size: 2rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 1rem;
          `}
        >
          ›
        </button>
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          className={css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          `}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={css`
              background: white;
              padding: 2rem;
              max-width: 600px;
              border-radius: 12px;
              position: relative;
              text-align: left;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              className={css`
                font-size: 1.8rem;
                margin-bottom: 1rem;
              `}
            >
              {activeProject.title}
            </h3>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className={css`
                width: 100%;
                border-radius: 10px;
                margin-bottom: 1rem;
              `}
            />
            <p>{activeProject.longDescription}</p>
            <button
              onClick={() => setActiveProject(null)}
              className={css`
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
              `}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
