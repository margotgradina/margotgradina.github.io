import {css, keyframes} from "@emotion/css";
import {getRandomNumber} from "../../helpers/GetRandomNumber";

interface AlphabetIconProps {
  label?: string;
  letter: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  padding?: string;
  fade?: boolean;
  rotate?: 0 | 90 | 180 | 270;
  wiggle?: boolean;
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
/* TODO scale width but keep proportions */

const AlphabetIcon = (props: AlphabetIconProps) => {
  return (
    <>
      <img
        src={"/alphabetIcons/" + props.letter + ".png"}
        key={props.label + props.letter + getRandomNumber(0, 1000)}
        className={css`
          display: flex;
          transform: rotate(${props.rotate ? props.rotate + "deg" : "0deg"});
          width: ${props?.width || "auto"};
          height: ${props?.height || "20vh"};
          max-height: ${props?.maxHeight || null};
          padding: ${props.padding || null};

          -webkit-user-drag: none;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;

          transition: opacity 4s;
          transform-origin: center;
          will-change: transform;
          :hover {
            opacity: 0.2;
            transition: opacity 0.5s;
            animation: ${wiggle} 0.45s ease-in-out;
          }

          &:hover {
          }
        `}
      />
    </>
  );
};

export default AlphabetIcon;
