import {css, keyframes} from "@emotion/css";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ButtonProps {
  onClick: Function;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  backgroundColor?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  labelColour?: string;
  label: string;
  iconEnd?: IconProp;
}

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(4deg); }
  30% { transform: rotate(-4deg); }
  45% { transform: rotate(4deg); }
  60% { transform: rotate(-4deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
`;
//TODO FIX OVERFLOW WHEN BUTTON IS SMALL
const BasicButton = (props: ButtonProps) => {
  return (
    <div
      onClick={(e) => props?.onClick()}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Raleway";
        font-size: medium;
        font-weight: ${props?.fontWeight || "600"};
        border-radius: 1.6rem;
        background: ${props?.backgroundColor || "#7cc0a0"};
        width: ${props?.width || "fit-content"};

        max-width: 90%;
        min-width: ${props?.minWidth || ""};
        height: ${props?.height || "2rem"};
        position: relative;
        transition: background-color 0.2s ease;
        padding: 0.1rem 0.5rem 0.1rem 0.5rem;

        transform-origin: center;
        will-change: transform;

        &:hover {
          background-color: #68ab8e;
          animation: ${wiggle} 0.45s ease-in-out;
        }
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
      {props.iconEnd && (
        <FontAwesomeIcon
          icon={props.iconEnd}
          className={css`
            color: ${props.labelColour || "white"};
            margin-right: 1rem; /* Adjust the distance as needed */
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          `}
        />
      )}
    </div>
  );
};

export default BasicButton;
