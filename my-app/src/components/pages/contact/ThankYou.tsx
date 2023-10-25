import {css} from "@emotion/css";

const ThankYou = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      `}
    >
      <p>Thank you for your message. I will get back to you as soon as possible!</p>
    </div>
  );
};

export default ThankYou;
