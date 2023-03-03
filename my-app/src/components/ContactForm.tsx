import { css } from "@emotion/css";
import { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const ContactForm = () => {
  let submitted: boolean = false;
  const navigate = useNavigate();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
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
          width: 80%;
          //   align-items: center;
        `}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScPTql725j6-b1TfDvGeunkcIXk-Vo2aAa6u4F2lk1juMjtNg/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={() => (submitted = true)}
      >
        {/* NAME */}
        <input
          className={css`
            margin: 10px;
            width: ;
          `}
          name="entry.22831218"
          type="text"
          placeholder="Name"
        />
        {/* EMAIL */}
        <input
          className={css`
            margin: 10px;
          `}
          name="entry.604116898"
          type="email"
          placeholder="Email"
        />

        {/* MESSAGE */}
        <textarea
          className={css`
            font-family: "montserrat";
            margin: 10px;
            font-family: ;
          `}
          name={"entry.1935013231"}
          rows={10}
          //   type="text"
          placeholder="Write your message here"
        />

        {/* SEND BUTTON */}
        <Button type={"submit"}> SEND </Button>
        {/* <input
          className={css`
            margin: 10px;
            align-self: center;
            width: 100px;
          `}
          type="submit"
          value="SEND"
        /> */}
      </form>
    </div>
  );
};

export default ContactForm;
