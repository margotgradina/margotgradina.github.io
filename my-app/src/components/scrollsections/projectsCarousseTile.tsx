import {css} from "@emotion/css";
import {Project} from "../../types/types";

interface Props {
  index: number;
  setActiveProject: (prj: Project | null) => void;
  project: Project;
}

const ProjectsCarousselTile = ({index, setActiveProject, project}: Props) => {
  return (
    <div
      key={index}
      onClick={() => setActiveProject(project)}
      className={css`
        position: relative;
        width: 28vw;
        max-width: 300px;
        aspect-ratio: 1 / 1;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        background-image: url(${project.imageThumb || project.image});
        background-size: cover;
        background-position: center;
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      {/* Milky overlay top section */}
      <div
        className={css`
          background: rgba(255, 255, 255, 0.85);
          padding: 1rem;

          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        `}
      >
        <h3
          className={css`
            font-size: 1.2rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 0.5rem;
          `}
        >
          {project.title}
        </h3>

        <div
          className={css`
            font-size: 0.9rem;
            color: #555;
          `}
        >
          {project.type}
        </div>
      </div>

      {/* Tags section at the bottom */}
      <div
        className={css`
          background: rgba(255, 255, 255, 0.8);
          padding: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 0.25rem;
        `}
      >
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className={css`
              background: #7cc0a0;
              border-radius: 4px;
              padding: 0.2rem 0.5rem;
              font-size: 0.7rem;
              color: #fff;
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousselTile;
