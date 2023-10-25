import {css} from "@emotion/css";
import {Resume} from "../../types/types";

interface Props {
  resume: Resume;
  type: "SUMMARY" | "GENERAL" | "EXPERIENCE" | "VOLUNTEER" | "EDUCATION" | "SKILLS" | "INTERESTS";
}

export const ResumeSection = (props: Props) => {
  const {resume, type} = props;

  if (type === "SUMMARY") {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: row;
          padding-top: 100px;
          width: 80%;
        `}
      >
        <p
          className={css`
            display: flex;
            flex: 1;
            text-align: justify;
            padding-right: 30px;
          `}
        >
          {resume.summary}
        </p>
        <img
          src={resume?.image}
          className={css`
            border-radius: 50%;
            width: 10vw;
            height: 10vw;
            min-height: 200px;
            min-width: 200px;
            max-width: 10vw;
            display: flex;
            flex: 1;
          `}
        />
      </div>
    );
  }

  return <></>;
};
