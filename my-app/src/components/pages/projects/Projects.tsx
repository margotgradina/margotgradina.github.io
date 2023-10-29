import {css} from "@emotion/css";
import AlphabetIcon from "../../alphabetIcons/AlphabetIcon";
import {useEffect, useState} from "react";
import {Project, Resume} from "../../../types/types";
import SpinnerComponent from "../../general/Spinner/Spinner";
import SblockGrid from "../../sBlocks/sBlockGrid";
import {useNavigate} from "react-router-dom";

const Projects = () => {
  //   const images: string[] = ["/images/Llamabank.png", "/images/T-portal.png"];
  //   const text: string[] = [
  //     "Llamabank was the final project of my Make IT Work reschooling, in which we had to create a full stack webapplication for online banking.",
  //     "This is T-portal",
  //   ];
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setLoading(true);
    fetch("data/projects.json")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const newProjects: Project[] = data.Projects;
        setProjects(newProjects);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handlePrevious = () => {
    if (currentProject == 0) {
      setCurrentProject(projects.length - 1);
    } else {
      setCurrentProject((p) => p - 1);
    }
  };

  const handleNext = () => {
    if (currentProject == projects.length - 1) {
      setCurrentProject(0);
    } else {
      setCurrentProject((p) => p + 1);
    }
  };

  return (
    <>
      <div
        key={"projects_page"}
        className={css`
          display: flex;
          width: 100%;
          height: 97%;
          align-items: center;
          align-self: flex-end;
          justify-content: center;
          flex-direction: row;
          gap: 1rem;
        `}
      >
        {projects?.length > 0 && (
          <>
            <div
              onClick={() => handlePrevious()}
              className={css`
                transform: rotate(270deg);
              `}
            >
              <AlphabetIcon letter={"M"} height={"2vw"} label={"arrow_left_projects"} />
            </div>
            <img
              className={css`
                width: 100%;
                max-width: 30%;
                object-fit: cover;
                object-position: top left;
                height: 40vh;
                min-height: 200px;
                /* max-height: 400px; */
                border-radius: 15px;
              `}
              src={projects[currentProject].image}
            />
            <div
              className={css`
                display: flex;
                flex-direction: column;
                overflow: hidden;
                width: 30%;
                height: 40vh;
                /* max-height: 400px; */
                min-height: 200px;
                border-radius: 15px;
                padding: 0px;
                background-color: rgba(124, 192, 160, 0.3);
              `}
            >
              <div
                className={css`
                  height: max-content;
                  font-family: "Raleway";
                  font-weight: 500;
                  font-size: calc(0.7rem + 0.5vw);
                  padding-left: 10px;
                  padding-top: 10px;
                `}
              >
                {projects[currentProject].title}
              </div>
              <div
                className={css`
                  flex: 1;
                  overflow-y: auto;

                  ::-webkit-scrollbar {
                    width: 2px; /* width of the entire scrollbar */
                  }

                  ::-webkit-scrollbar-thumb {
                    background-color: #7cc0a0; /* color of the scroll thumb */
                    border-radius: 20px; /* roundness of the scroll thumb */
                    border: 0px solid orange; /* creates padding around scroll thumb */
                  }
                `}
              >
                <div
                  className={css`
                    padding: 15px;
                    font-family: "Raleway";
                    font-weight: 400;
                    font-size: calc(0.5rem + 0.5vw);
                    text-align: justify;
                    white-space: pre-wrap;
                  `}
                >
                  <p>{projects[currentProject].text}</p>
                  {projects[currentProject]?.url?.startsWith("/") ? (
                    <p
                      className={css`
                        text-decoration: underline;
                      `}
                      onClick={() => navigate(projects[currentProject].url as string)}
                    >
                      {" "}
                      {projects[currentProject]?.link}
                    </p>
                  ) : (
                    projects[currentProject]?.url && <a href={projects[currentProject]?.url}>{projects[currentProject]?.link}</a>
                  )}
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  height: max-content;

                  flex-direction: row;
                  flex-wrap: wrap;
                  gap: 5px;
                  padding: 10px;
                `}
              >
                {projects[currentProject].tools.map((tool, index) => {
                  return (
                    <>
                      {" "}
                      <div
                        key={"toolel" + currentProject + index}
                        className={css`
                          background-color: rgba(67, 151, 112, 0.24);
                          border-radius: 10px;
                          height: max-content;
                          width: max-content;
                          padding: 7px;
                          font-size: calc(0.4rem + 0.3vw);
                          transition: opacity 4s;
                          :hover {
                            opacity: 0.2;
                            transition: opacity 0.5s;
                          }
                        `}
                      >
                        {tool}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              onClick={() => handleNext()}
              className={css`
                transform: rotate(90deg);
              `}
            >
              <AlphabetIcon letter={"M"} height={"2vw"} label={"arrow_left_projects"} />
            </div>
          </>
        )}
        {loading && (
          <>
            <SpinnerComponent />
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
