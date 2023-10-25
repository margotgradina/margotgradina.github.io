import {css} from "@emotion/css";

interface AlphabetIconProps {
  letter: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  direction?: "HORIZONTAL" | "VERTICAL";
  padding?: string;
  fade?: boolean;
  rotate?: 0 | 90 | 180 | 270;
}

/* TODO scale width but keep proportions */

const AlphabetIcon = (props: AlphabetIconProps) => {
  if (props?.direction == "VERTICAL") {
    return (
      <>
        <img
          src={"/alphabetIcons/" + props.letter + ".png"}
          className={css`
            display: flex;
            transform: rotate(270deg);
            width: ${props?.width || "auto"};
            height: ${props?.height || "20vh"};
            max-height: ${props?.maxHeight || null};
            padding: ${props.padding || null};

            transition: opacity 4s;
          :hover {
            opacity: 0.2;
            transition: opacity 0.5s;

          `}
        />
      </>
    );
  } else {
    return (
      <>
        <img
          src={"/alphabetIcons/" + props.letter + ".png"}
          className={css`
            display: flex;
            width: ${props?.width || "auto"};
            height: ${props?.height || "20vh"};
            max-height: ${props?.maxHeight || null};

            transition: opacity 4s;
          :hover {
            opacity: 0.2;
            transition: opacity 0.5s;
          `}
        />
      </>
    );
  }
};

export default AlphabetIcon;
