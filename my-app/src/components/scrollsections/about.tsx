import {css} from "@emotion/css";

const About = () => {
  return (
    <section
      id="about"
      className={css`
        width: 100%;
        min-height: 100vh;
        padding: 4rem 2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          padding: 3rem 1rem;
        }
      `}
    >
      <div
        className={css`
          max-width: 800px;
          text-align: center;
        `}
      >
        <h2
          className={css`
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: #333;

            @media (max-width: 768px) {
              font-size: 2rem;
            }
          `}
        >
          About Me
        </h2>

        <p
          className={css`
            font-size: 1.1rem;
            line-height: 1.8;
            color: #555;

            @media (max-width: 768px) {
              font-size: 1rem;
            }
          `}
        >
          I'm Margot Gradina, a passionate front-end developer with a flair for elegant user interfaces and seamless user experiences. With a
          background in design and a love for code, I craft web applications that are not only functional but also visually compelling.
          <br />
          <br />
          My toolbox includes React, TypeScript, and modern CSS (including Emotion), and I thrive on turning complex ideas into intuitive digital
          products.
        </p>
      </div>
    </section>
  );
};

export default About;
