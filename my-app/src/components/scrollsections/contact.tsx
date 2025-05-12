import {css} from "@emotion/css";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const hiddenButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section
      id="contact"
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 1rem;
        width: 100%;
        min-height: 100vh;
        /* background-color: #f8f9fa; */
        box-sizing: border-box;
      `}
    >
      <h2
        className={css`
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #333;
        `}
      >
        Contact Me
      </h2>

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        className={css`
          display: none;
        `}
        onLoad={() => {
          if (submitted) {
            navigate("/thank-you");
          }
        }}
      />

      <form
        className={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 600px;
          gap: 1rem;
        `}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScPTql725j6-b1TfDvGeunkcIXk-Vo2aAa6u4F2lk1juMjtNg/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)}
      >
        <input name="entry.22831218" type="text" placeholder="Name" required className={inputStyle} />

        <input name="entry.604116898" type="email" placeholder="Email" required className={inputStyle} />

        <textarea
          name="entry.1935013231"
          placeholder="Write your message here"
          rows={8}
          required
          className={css`
            ${inputStyle}
            resize: none;
            padding-top: 1rem;
          `}
        />

        <div
          onClick={() => hiddenButtonRef.current?.click()}
          className={css`
            cursor: pointer;
            background-color: #7cc0a0;
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 1.5rem;
            font-weight: 600;
            font-family: "Raleway";
            text-align: center;
            align-self: flex-start;
            transition: background-color 0.2s ease;
            &:hover {
              background-color: #68ab8e;
            }
          `}
        >
          Send
        </div>

        <Button
          ref={hiddenButtonRef}
          type="submit"
          className={css`
            display: none;
          `}
        />
      </form>
    </section>
  );
};

const inputStyle = css`
  font-family: "Raleway";
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #7cc0a0;
  border-radius: 1rem;
  background: rgba(238, 165, 128, 0);
  width: 100%;
  box-sizing: border-box;
`;

export default ContactForm;
