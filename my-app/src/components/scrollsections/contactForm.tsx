import {css, keyframes} from "@emotion/css";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";
import BasicButton from "../general/BasicButton";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";

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

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const hiddenButtonRef = useRef<HTMLButtonElement | null>(null);
  const [showToast, setShowToast] = useState(false);

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70vw;
        margin: auto;
      `}
    >
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        className={css`
          display: none;
        `}
        onLoad={() => {
          if (submitted) {
            setShowToast(true);
          }
        }}
      />

      <form
        className={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          /* max-width: 600px; */
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

        <BasicButton onClick={() => hiddenButtonRef.current?.click()} label={"Send"} minWidth="4.5rem" />
        <Button
          ref={hiddenButtonRef}
          type="submit"
          className={css`
            display: none;
          `}
        />
      </form>
      {showToast && (
        <Snackbar
          anchorOrigin={{vertical: "bottom", horizontal: "center"}}
          open={showToast}
          TransitionComponent={Fade}
          autoHideDuration={4000}
          onClose={() => setShowToast(false)}
          message="Thanks for your message! I will get in touch as soon as possible :)"
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor: "#7cc0a0",
              color: "white",
              fontFamily: "Raleway",
              fontSize: "0.9rem",
              borderRadius: "1rem",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              padding: "0.75rem 1.25rem",
            },
          }}
        />
      )}
    </div>
  );
};

export default ContactForm;
