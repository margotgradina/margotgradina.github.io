import { css } from "@emotion/css";
import AlphabetIcon from "./alphabetIcons/AlphabetIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface headerProps {
  onClick: () => void;
}

const Header = (props: headerProps) => {
  const handleClickSocials = (socials: "LI" | "IG" | "GH") => {
    switch (socials) {
      case "LI":
        window.open("https://www.linkedin.com/in/margotdehaas/", "_blank");
        break;
      case "IG":
        window.open("https://www.instagram.com/margotgradina/", "_blank");
        break;
      case "GH":
        window.open("https://github.com/margotgradina", "_blank");
        break;
    }
  };
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        border: 0px solid #308cdc;
        width: 100vw;
      `}
    >
      <div
        className={css`
          display: flex;
          position: relative;
          flex-direction: row;
          width: 100vw;
          gap: 0.2rem;
          padding: 1rem;
          justify-content: center;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          `}
          onClick={() => props.onClick()}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              gap: 0.1rem;
            `}
          >
            <HeaderTitle title={"MARGOT"} />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              gap: 0.1rem;
            `}
          >
            <HeaderTitle title={"GRADINA"} />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            min-width: 20px;
            position: absolute;
            top: 0;
            padding: 5px;
            gap: 0.1rem;
            right: 0;
          `}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size={"lg"}
            color="#7CC0A0"
            onClick={() => {
              handleClickSocials("LI");
            }}
          />
          <FontAwesomeIcon
            icon={faGithub}
            size={"lg"}
            color="#BDD364"
            onClick={() => {
              handleClickSocials("GH");
            }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size={"lg"}
            color="#EEA580"
            onClick={() => {
              handleClickSocials("IG");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle = (props: HeaderTitleProps) => {
  return (
    <>
      {props.title.split("").map((item) => {
        if (item == " ") {
          return (
            <div
              className={css`
                width: 1.5rem;
              `}
            ></div>
          );
        } else {
          return (
            <AlphabetIcon letter={item} maxHeight={"5vw"} height={"5vw"} />
          );
        }
      })}
    </>
  );
};
