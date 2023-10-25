import {css} from "@emotion/css";
import AlphabetIcon from "../../alphabetIcons/AlphabetIcon";
import {useState} from "react";

const Projects = () => {
  const images: string[] = ["/images/Llamabank.png", "/images/T-portal.png"];
  const text: string[] = ["This is Llamabank", "This is T-portal"];
  const [currentProject, setCurrentProject] = useState<number>(0);

  const handlePrevious = () => {
    if (currentProject == 0) {
      setCurrentProject(images.length - 1);
    } else {
      setCurrentProject((p) => p - 1);
    }
  };

  const handleNext = () => {
    if (currentProject == images.length - 1) {
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
          /* background-color: aquamarine; */
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 1rem;
        `}
      >
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
            border-radius: 15px;
          `}
          src={images[currentProject]}
        ></img>
        <div
          className={css`
            width: 30%;
            height: 40vh;
            border-radius: 15px;
            padding: 0px;
            background-color: rgba(124, 192, 160, 0.3);
          `}
        >
          <p
            className={css`
              padding: 5px;
            `}
          >
            {text[currentProject]}
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
      </div>
    </>
  );
};

export default Projects;
