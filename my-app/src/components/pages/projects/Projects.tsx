import {css} from "@emotion/css";
import AlphabetIcon from "../../alphabetIcons/AlphabetIcon";
import {useEffect, useState} from "react";
import {Project, Resume} from "../../../types/types";
import SpinnerComponent from "../../general/Spinner/Spinner";

const Projects = () => {
  //   const images: string[] = ["/images/Llamabank.png", "/images/T-portal.png"];
  //   const text: string[] = [
  //     "Llamabank was the final project of my Make IT Work reschooling, in which we had to create a full stack webapplication for online banking.",
  //     "This is T-portal",
  //   ];
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => fetchProjects(), 1000);
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
        className={css`
          display: flex;
          width: 100%;
          height: 100%;

          align-items: center;
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
              <AlphabetIcon letter={"M"} height={"2vw"} />
            </div>
            <img
              className={css`
                width: auto;
                object-fit: cover;
                max-width: 30%;
                height: 40vh;
                max-height: 400px;
                border-radius: 15px;
              `}
              src={projects[currentProject].image}
            ></img>
            <div
              className={css`
                width: 30%;
                height: 40vh;
                max-height: 400px;
                border-radius: 15px;
                padding: 0px;
                overflow-y: auto;
                background-color: rgba(124, 192, 160, 0.3);
                ::-webkit-scrollbar {
                  width: 1px; /* width of the entire scrollbar */
                }

                ::-webkit-scrollbar-thumb {
                  background-color: #7cc0a0; /* color of the scroll thumb */
                  border-radius: 20px; /* roundness of the scroll thumb */
                  border: 0px solid orange; /* creates padding around scroll thumb */
                }
              `}
            >
              <p
                className={css`
                  padding: 5px;
                  font-family: "Raleway";
                  font-weight: 400;
                  text-align: justify;
                  font-size: small;
                `}
              >
                {projects[currentProject].text}
              </p>
            </div>
            <div
              onClick={() => handleNext()}
              className={css`
                transform: rotate(90deg);
              `}
            >
              <AlphabetIcon letter={"M"} height={"2vw"} />
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
