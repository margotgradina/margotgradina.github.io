import {css} from "@emotion/css";
import AlphabetIcon from "../alphabetIcons/AlphabetIcon";
import {useState} from "react";
import ProjectsCarousselTile from "./projectsCarousseTile";
import {Project} from "../../types/types";

const projects: Project[] = [
  {
    title: "QOOOB",
    type: "Personal project",
    image: "/images/sBlocks.png",
    imageThumb: "/images/qooobSquare.png",
    url: "https://qooob.netlify.app/",
    urlDescription: "Try QOOOB",
    tags: ["Typescript", "React", "Netlify", "Git", "CSS"],
    shortDescription: "",
    longDescription:
      "A simple design tool for creating quilts, stained glass, mosaics, or geometric patterns on a grid. Users can easily build and customize their designs, then download them as images.",
  },
  {
    title: "Llamabank",
    type: "Study project",
    imageThumb: "/images/LlamaSq.png",
    image: "/images/Llamabank.png",
    url: "https://github.com/margotgradina/Llamabank",
    urlDescription: "Github repo",
    tags: ["CSS", "HTML", "Javascript", "Java", "Springboot", "MyQL", "Git"],
    shortDescription: "",
    longDescription:
      "Llamabank was the final project of my Make IT Work course. Over the course of a 5-week sprint, our team of four designed and built a full-stack online banking system from scratch. The application included features like user registration, account overviews, internal and external money transfers, and a PIN console for mock payments to a fictional shop. We handled everything end-to-end—from designing the ERD to deploying a fully functional system backed by a custom database.",
  },
  {
    title: "T-Box",
    type: "Current employer",
    image: "/images/T-portal.png",
    url: "https://t-box.nl",
    urlDescription: "T-Box website",
    tags: ["Typescript", "React", "Wlanguage", "Git", "CSS", "MSSQL", "React Native"],
    shortDescription: "",
    longDescription:
      "T-Box by Acconet is a flexible automation solution that helps businesses streamline operations and enable smooth data exchange. Its companion, T-Portal, is a web interface that allows clients to easily manage and customize their data. I’m involved in the full development process of T-Portal—from front-end to back-end—ensuring both client-specific features and core functionality are tailored to meet each customer’s unique needs.",
  },
  {
    title: "HabitHare",
    type: "Personal project | Work in progress",
    image: "/images/Habithare.png",
    imageThumb: "/images/Habithare.png",
    tags: ["Typescript", "React", "React-native", "Git", "CSS"],
    shortDescription: "",
    longDescription: "HabitHare is a simple habittracker to help users build and maintain positive habits. It's a work in progress.",
  },
];

const ProjectsCaroussel = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = [
    projects[currentIndex % projects.length],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <>
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70vw;
          margin: auto;
        `}
      >
        <div onClick={handlePrev}>
          <AlphabetIcon letter="M" height="1.5vw" label="arrow_left_projects" rotate={270} />
        </div>

        <div
          className={css`
            display: flex;
            gap: 1.5rem;
            flex: 1;
            justify-content: center;
            padding: 2rem 0;
          `}
        >
          {visibleProjects.map((project, index) => (
            <ProjectsCarousselTile project={project} index={index} setActiveProject={(prj: Project | null) => setActiveProject(prj)} />
          ))}
        </div>

        <div onClick={handleNext}>
          <AlphabetIcon letter="M" height="1.5vw" label="arrow_right_projects" rotate={90} />
        </div>
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
              width: 90%;
              border-radius: 12px;
              position: relative;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
              overflow-y: auto;
              height: 80vh;
              max-height: 90vh;
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
            <p
              className={css`
                font-weight: bold;
                color: #555;
              `}
            >
              {activeProject.type}
            </p>
            <div
              className={css`
                margin: 0.5rem 0;
              `}
            >
              {activeProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className={css`
                    background: #e0e0e0;
                    border-radius: 4px;
                    padding: 0.3rem 0.6rem;
                    margin: 0.2rem;
                    display: inline-block;
                    font-size: 0.75rem;
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>{activeProject.longDescription}</p>
            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className={css`
                display: inline-block;
                margin-top: 1rem;
                background-color: #7cc0a0;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                text-decoration: none;
              `}
            >
              {activeProject.urlDescription}
            </a>
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
    </>
  );
};

export default ProjectsCaroussel;
