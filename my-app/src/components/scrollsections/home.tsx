import {css} from "@emotion/css";

const HomeSection = () => {
  return (
    <section
      id="home"
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 4rem 2rem;
        min-height: 100vh;
        box-sizing: border-box;
        width: 100%;

        gap: 3rem;

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
          gap: 1rem;
          padding: 2rem;
        `}
      >
        <h1
          className={css`
            font-size: 3rem;
            font-weight: bold;
            margin: 0;

            color: #333;
          `}
        >
          Hi, my name is Margot.
        </h1>
        <h2
          className={css`
            font-size: 1.5rem;
            font-weight: 500;
            color: #7cc0a0;
            margin: 0;
          `}
        >
          I'm a Software Developer
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
        <img
          src={"/images/profilepic.jpg"}
          alt="Margot Gradina"
          className={css`
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #7cc0a0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

            @media (max-width: 768px) {
              width: 180px;
              height: 180px;
            }
          `}
        />
      </div>
    </section>
  );
};

export default HomeSection;
