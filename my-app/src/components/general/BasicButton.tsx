import {css} from "@emotion/css";

interface ButtonProps {
  onClick: Function;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  backgroundColor?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  labelColour?: string;
  label: string;
}

const BasicButton = (props: ButtonProps) => {
  return (
    <div
      onClick={(e) => props?.onClick()}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Raleway";
        font-size: small;
        font-weight: ${props?.fontWeight || "600"};
        border-radius: 1.6rem;
        background: ${props?.backgroundColor || "#7cc0a0"};
        width: ${props?.width || "10vw"};
        min-width: ${props?.minWidth || "50px"};
        height: ${props?.height || "2rem"};
      `}
    >
      <label
        className={css`
          display: flex;
          font-family: "Raleway";
          flex-direction: column;
          text-align: center;
          align-content: center;
          color: ${props.labelColour || "white"};
        `}
      >
        {props?.label}
      </label>
    </div>
  );
};

export default BasicButton;
