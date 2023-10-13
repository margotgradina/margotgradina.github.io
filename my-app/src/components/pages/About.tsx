import { css } from "@emotion/css";
import React, { useEffect } from "react";
import { useAbout } from "../../hooks/useAbout";
import { Resume } from "../../types/typesResume";
import { GeneralSection } from "../Resume/GeneralSection";
import { Summary } from "../Resume/Summary";
import { ResumeSection } from "../ResumeSection";
import Usermenu from "../Usermenu";

interface Props {
  resume: Resume;
}

const About = (props: Props) => {
  const { resume } = props;
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
      `}
    >
      {/* <Usermenu /> */}
      <Summary resume={resume as Resume} />
      {/* <GeneralSection resume={resume as Resume}/> */}
      {/* <ResumeSection resume={resume as Resume} type={"SUMMARY"}/> */}
    </div>
  );
};

export default About;
