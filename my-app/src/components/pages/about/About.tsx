import {css} from "@emotion/css";

const About = () => {
  // const { onLoad, resume } = useAbout();

  // useEffect(() => {
  //   onLoad();
  // }, []);
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80vw;
        height: 80vh;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 60%;
          /* height: 99%; //TODO FIX HEIGHT OF */
        `}
      >
        <div
          className={css`
            flex-direction: column;
            padding: 10px;
            padding-top: 5vw;
            padding-bottom: 2vw;
          `}
        >
          <p
            className={css`
              display: flex;
              flex: 1;
              font-family: "Raleway";
              font-size: medium;
              font-weight: 300;
              text-align: justify;
            `}
          >
            From cultural connoisseur to code crafter: I’m a software developer with a less-than-average background.
            <br></br>
            <br></br>
            You see, before I discovered my true calling in code, I spent a good few years working in the cultural field as a program manager. During
            the global pandemic, I realised that staring at design chairs for a living just wasn't cutting it for me anymore. So, I traded those
            design chairs for a screen and a fancy new keyboard, and have been loving every minute of it.
            <br></br>
            <br></br>I consider myself a critical thinker and a fast learner. I have over seven years of experience working together with people in
            diverse positions and from diverse backgrounds. It has provided me with a knack for speaking ‘human’: I can explain technical concepts in
            a way non-techies can understand. Plus, my background in the cultural field gives me a hands-on and out-of-the-box perspective that allows
            me to approach problems from different angles and come up with more creative solutions. My experience in organising events has made me a
            skilled project manager. I have a slightly unhealthy obsession with todo lists, I can juggle multiple tasks at once and think on my feet,
            and I'm not afraid of a tight deadline. After all, I'm used to organising art shows where the artist is always late and the opening night
            is always tonight.
            <br></br>
            <br></br>I know my way around SQL, React, TypeScript, Javascript, HTML, CSS, Java, and Git, basic unit testing and I just started a course
            on ThreeJS, but I'm always looking to expand my coding vocabulary. I'm excited to continue growing and to explore the world of code. Don’t
            hesitate to connect and drop me a line!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
