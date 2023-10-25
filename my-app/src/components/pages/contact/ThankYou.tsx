import {css} from "@emotion/css";

const ThankYou = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <p>Thank you for your message. I will get back to you as soon as possible!</p>
    </div>
  );
};

export default ThankYou;
