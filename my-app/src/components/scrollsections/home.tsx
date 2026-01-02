import {css} from "@emotion/css";
import "../../styling/rgb-img.css";
import AlphabetIcon from "../alphabetIcons/AlphabetIcon";

const HomeSection = () => {
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
        <p
          className={css`
            font-size: 1rem;
            max-width: 600px;
            color: #555;
            line-height: 1.6;
          `}
        ></p>
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
        {/* <div id="div-img" className="container">
          <img id="animated-image-red" className="imgPart" width="80%" src="/Images/glitch-red.png" alt="Image of Designer" />
          <img className="imgPart" width="80%" src="/images/glitch-green.png" alt="Image of Designer" />
          <img id="animated-image-blue" className="imgPart" width="80%" src="/images/glitch-blue.png" alt="Image of Designer" />
          {/* <!-- <img width="80%" src="/images/Glitch.png" alt="Image of Designer" /> --> */}
        {/* </div> */}
        <img
          src={"/images/profilepic.jpg"}
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
