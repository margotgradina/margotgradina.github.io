import {css} from "@emotion/css";
import "../../styling/rgb-img.css";
import AlphabetIcon from "../alphabetIcons/AlphabetIcon";
import {RefObject} from "react";
import BasicButton from "../general/BasicButton";

interface Props {
  projectsRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}
const HomeSection = (props: Props) => {
  return (
    <section
      id="home"
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 4rem 15rem 2rem 10rem;
        min-height: 100vh;
        box-sizing: border-box;
        width: 100%;
        /* background-color: aquamarine; */
        /* gap: rem; */

        @media (max-width: 768px) {
          flex-direction: column;
          text-align: center;
        }
      `}
    >
      {/* Left - Text */}
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
        `}
      >
        {/* <div
          className={css`
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
          `}
        >
          <AlphabetIcon letter={"H"} width="7rem" height="7rem" />
          <AlphabetIcon letter={"E"} width="7rem" height="7rem" />
          <AlphabetIcon letter={"L"} width="7rem" height="7rem" />
          <AlphabetIcon letter={"L"} width="7rem" height="7rem" />
          <AlphabetIcon letter={"O"} width="7rem" height="7rem" />
        </div> */}

        <h1
          className={css`
            font-size: 4.5rem;
            font-weight: bold;

            align-self: flex-start;
            margin: 0;

            /* color: #ebc417; */
            color: #333;
          `}
        >
          Hi, i'm{" "}
          <label
            className={css`
              color: #7cc0a0;
            `}
          >
            Margot
          </label>
          .
        </h1>
        <h2
          className={css`
            font-size: 1.5rem;
            font-weight: 500;
            align-self: flex-start;
            color: #333;
            margin: 0;
          `}
        >
          I'm a Full-stack developer
        </h2>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-self: flex-start;
            color: #333;
            gap: 1rem;
          `}
        >
          <BasicButton label="Projects" onClick={() => props.scrollToSection(props.projectsRef as React.RefObject<HTMLDivElement>)} />
          <BasicButton label="Say hello" onClick={() => props.scrollToSection(props.contactRef as React.RefObject<HTMLDivElement>)} />
        </div>
      </div>

      {/* Right - Image */}
      <div
        className={css`
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src={"/images/profilepic2.png"}
          alt="Margot Gradina"
          className={css`
            width: 20rem;
            height: 20rem;
            border-radius: 50%;
            object-fit: cover;
            /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1); */

            @media (max-width: 768px) {
              width: 0px;
              height: 180px;
            }
          `}
        />
      </div>
    </section>
  );
};

export default HomeSection;
