import {css, keyframes} from "@emotion/css";
import {Component, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(4deg); }
  30% { transform: rotate(-4deg); }
  45% { transform: rotate(4deg); }
  60% { transform: rotate(-4deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
`;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  const hiddenButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      `}
    >
      <iframe
        name={"hidden_iframe"}
        id={"hidden_iframe"}
        className={css`
          display: none;
        `}
        onLoad={() => {
          if (submitted) {
            navigate("/thank-you");
          }
        }}
      ></iframe>
      <form
        className={css`
          display: flex;
          flex-direction: column;
          width: 60%;
          gap: 1rem;
          align-items: center;
        `}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScPTql725j6-b1TfDvGeunkcIXk-Vo2aAa6u4F2lk1juMjtNg/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)}
      >
        {/* NAME */}
        <input
          className={css`
            padding-left: 1rem;
            height: 2rem;
            font-family: "Raleway";
            font-size: small;
            font-weight: 400;
            width: 100%;
            flex-shrink: 0;
            border-radius: 1rem;
            border: 2px solid #7cc0a0;
            background: rgba(238, 165, 128, 0);
          `}
          name="entry.22831218"
          type="text"
          placeholder="Name"
        />
        {/* EMAIL */}
        <input
          className={css`
            padding-left: 1rem;
            height: 2rem;
            font-family: "Raleway";
            font-size: small;
            font-weight: 400;
            width: 100%;
            flex-shrink: 0;
            border-radius: 1rem;
            border: 2px solid #7cc0a0;
            background: rgba(238, 165, 128, 0);
          `}
          name="entry.604116898"
          type="email"
          placeholder="Email"
        />

        {/* MESSAGE */}
        <textarea
          className={css`
            resize: none;
            height: 10rem;
            font-family: "Raleway";
            font-size: small;
            font-weight: 400;
            flex-shrink: 0;
            width: 100%;
            padding-left: 1rem;
            padding-top: 1rem;
            border-radius: 1rem;
            border: 2px solid #7cc0a0;
            background: rgba(238, 165, 128, 0);
          `}
          name={"entry.1935013231"}
          rows={10}
          //   type="text"
          placeholder="Write your message here"
        />

        {/* SEND BUTTON */}
        <div
          onClick={() => hiddenButtonRef.current?.click()}
          className={css`
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-family: "Raleway";
            font-size: small;
            font-weight: 600;
            border-radius: 1.5625rem;
            background: #7cc0a0;
            min-width: 50px;
            height: 2rem;
            padding: 0 12px;
            cursor: pointer;
            color: white;

            transform-origin: center;
            will-change: transform;

            &:hover {
              animation: ${wiggle} 0.45s ease-in-out;
            }
          `}
        >
          Send
        </div>
        <Button
          ref={hiddenButtonRef}
          onClick={() => {}}
          className={css`
            width: 1px;
            visibility: hidden;
          `}
          type={"submit"}
        ></Button>
      </form>
    </div>
  );
};

export default ContactForm;
