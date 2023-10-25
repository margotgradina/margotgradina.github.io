import {css} from "@emotion/css";
import {faCakeCandles, faAt, faLocationPin, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Resume} from "../../types/types";

interface Props {
  resume: Resume | null;
}

export const GeneralSection = (props: Props) => {
  const {resume} = props;

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-evenly;
      `}
    >
      <div>
        <FontAwesomeIcon
          icon={faCakeCandles}
          className={css`
            padding: 0 5px 0 0;
          `}
        />{" "}
        {resume?.dateOfBirth}
      </div>
      <div>
        <FontAwesomeIcon
          icon={faAt}
          className={css`
            padding: 0 5px 0 0;
          `}
        />
        {resume?.email}
      </div>
      <div>
        <FontAwesomeIcon
          icon={faLocationPin}
          className={css`
            padding: 0 5px 0 0;
          `}
        />
        {resume?.location.city}
      </div>
    </div>
  );
};
