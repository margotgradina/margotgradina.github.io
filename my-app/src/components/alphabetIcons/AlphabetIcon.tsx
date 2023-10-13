import { css } from "@emotion/css";

interface AlphabetIconProps {
  letter: string;
  // | "A"
  // | "B"
  // | "C"
  // | "D"
  // | "E"
  // | "F"
  // | "G"
  // | "H"
  // | "I"
  // | "J"
  // | "K"
  // | "L"
  // | "M"
  // | "N"
  // | "O"
  // | "P"
  // | "Q"
  // | "R"
  // | "S"
  // | "T"
  // | "U"
  // | "V"
  // | "W"
  // | "X"
  // | "Y"
  // | "Z";
  width?: string;
  height?: string;
  maxHeight?: string;
  direction?: "HORIZONTAL" | "VERTICAL";
  padding?: string;
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
          `}
        />
      </>
    );
  }
};

export default AlphabetIcon;
