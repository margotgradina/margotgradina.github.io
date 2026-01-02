import {css} from "@emotion/css";
import AlphabetIcon from "../alphabetIcons/AlphabetIcon";

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
      I’m a software developer with a less-than-average background. You see, before I discovered my true love for code, I spent a 7 years working in
      the cultural field as a program manager. During the global pandemic, I realised that staring at design chairs for a living just wasn't cutting
      it for me anymore - So, I traded those design chairs for a shiny new keyboard, and I haven't looked back since.
      <br />
      <br />
      Now I build apps instead of exhibitions, write code instead of cryptic text signs, and solve bugs instead of budget crises. I'm a quick study
      with a sharp mind, and years of wrangling creatives and people from all backgrounds have given me a knack for speaking 'human'. I come with
      strong project management chops, a hands-on mentality, and a slightly unhealthy obsession with todo lists. Tight deadlines don't scare me -
      after all, I'm used to organising art shows where the artist is always late and the opening night is always tonight.
      <br />
      <br />
      Let’s connect! Whether it’s about code, culture, or just comparing todo list apps. Drop me a line!{" "}
      {/* <div
        className={css`
          display: flex;
          flex-direction: row;
          gap: 0.2rem;
        `}
        onClick={() => {}}
      >
        <AlphabetIcon letter="V" width="2rem" height="2rem" />
      </div> */}
    </p>
    //   </div>
    // </section>
  );
};

export default About;
