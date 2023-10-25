import {css} from "@emotion/css";

interface AlphabetIconProps {
  letter: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  padding?: string;
  fade?: boolean;
  rotate?: 0 | 90 | 180 | 270;
}

/* TODO scale width but keep proportions */

const AlphabetIcon = (props: AlphabetIconProps) => {
  return (
    <>
      <img
        src={"/alphabetIcons/" + props.letter + ".png"}
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
          :hover {
            opacity: 0.2;
            transition: opacity 0.5s;
          }
        `}
      />
    </>
  );
};

export default AlphabetIcon;
