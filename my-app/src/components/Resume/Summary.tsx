import {css} from "@emotion/css";
import {Resume} from "../../types/typesResume";
import {GeneralSection} from "./GeneralSection";

interface Props {
  resume: Resume;
}

export const Summary = (props: Props) => {
  const {resume} = props;

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        padding-top: 100px;
        width: 80%;
      `}
    >
      <div
        className={css`
          flex-direction: column;
        `}
      >
        <GeneralSection resume={resume as Resume} />
        <p
          className={css`
            display: flex;
            flex: 1;
            text-align: justify;
            padding-right: 30px;
          `}
        >
          {resume?.summary}
        </p>
      </div>

      <img
        src={resume?.image}
        className={css`
          border-radius: 50%;
          width: 10vw;
          height: 10vw;
          // min-height: 200px;
          // min-width: 200px;
          max-width: 10vw;
          display: flex;
          flex: 1;
        `}
      />
    </div>
  );
};
