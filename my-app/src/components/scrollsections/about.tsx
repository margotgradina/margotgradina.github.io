import {css} from "@emotion/css";

const About = () => {
  return (
    // <section
    //   id="about"
    //   className={css`
    //     width: 100%;
    //     min-height: 100vh;
    //     padding: 4rem 2rem;
    //     box-sizing: border-box;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;

    //     @media (max-width: 768px) {
    //       padding: 3rem 1rem;
    //     }
    //   `}
    // >
    //   <div
    //     className={css`
    //       max-width: 800px;
    //       text-align: center;
    //     `}
    //   >
    //     <h2
    //       className={css`
    //         font-size: 2.5rem;
    //         margin-bottom: 1.5rem;
    //         color: #333;

    //         @media (max-width: 768px) {
    //           font-size: 2rem;
    //         }
    //       `}
    //     >
    //       About Me
    //     </h2>

    <p
      className={css`
        font-size: 0.8;
        padding: 1rem;
        line-height: 1.8;
        color: #555;

        @media (max-width: 768px) {
          font-size: 0.8;
        }
      `}
    >
      I’m a software developer with 3 years experience with a less-than-average background. You see, before I discovered my true love for code, I
      spent a 7 years working in the cultural field as a program manager. During the global pandemic, I realised that staring at design chairs for a
      living just wasn't cutting it for me anymore. So, I traded those design chairs for a shiny new keyboard, and have been loving every minute of
      it.
      <br />
      <br />
      ///write something about coding
      <br />
      <br />
      I consider myself a critical thinker and a fast learner. I am used to working together with people in diverse positions and from diverse
      backgrounds. It has provided me with a knack for speaking ‘human’.
      <br />
      I am an experienced project manager, have a slightly unhealthy obsession with todo lists and a hands-on mentality and I'm not afraid of a tight
      deadline. After all, I'm used to organising art shows where the artist is always late and the opening night is always tonight.
      <br />
      <br />
      I'm excited to continue growing and to explore the world of code. Don’t hesitate to connect and drop me a line!
    </p>
    //   </div>
    // </section>
  );
};

export default About;
