import React from "react";
import { Link } from "react-router-dom";
import Usermenu from "../Usermenu";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../ContactForm";
import { Resume } from "../../types/typesResume";
import Socials from "../Socials";

interface Props {
  resume: Resume;
}

const Contact = (props: Props) => {
  const { resume } = props;

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        className={css`
          width: 80vw;
          height: 80vh;
          // background-color: yellow;
          // overflow-y: scroll;
          // scrollbar-color: white;
          // ::-webkit-scrollbar {
          //   width: 10px;
          // }

          // /* Track */
          // ::-webkit-scrollbar-track {
          //   background: #ffffff;
          // }

          // /* Handle */
          // ::-webkit-scrollbar-thumb {
          //   background: #ffffff;
          // }

          // /* Handle on hover */
          // ::-webkit-scrollbar-thumb:hover {
          //   // border: 1px;
          //   background: #555;
        `}
      >
        <ContactForm />

        <Socials resume={resume} />
      </div>
    </div>
  );
};

export default Contact;
