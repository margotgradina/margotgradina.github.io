import { css } from "@emotion/css";

interface sBlockProps {
  size?: number;
  sizeUnit?: string;
  topLeftBR?: boolean; //border radius for each corner on or off;
  topRightBR?: boolean;
  bottomLeftBR?: boolean;
  bottomRightBR?: boolean;
}

const SBlock = (props: sBlockProps) => {
  return (
    <>
      <div
        className={css`
          background-color: #1a8c8c;
          width: ${props.size && props.sizeUnit
            ? props.size + props.sizeUnit
            : "10em"};
          height: ${props.size && props.sizeUnit
            ? props.size + props.sizeUnit
            : "10em"};
          border-radius: ${props.topLeftBR
              ? props.size && props.sizeUnit
                ? props.size * 0.75 + props.sizeUnit
                : "7.5em"
              : ""}
            ${props.topRightBR
              ? props.size && props.sizeUnit
                ? props.size * 0.75 + props.sizeUnit
                : "7.5em"
              : ""}
            ${props.bottomRightBR
              ? props.size && props.sizeUnit
                ? props.size * 0.75 + props.sizeUnit
                : "7.5em"
              : ""}
            ${props.bottomLeftBR
              ? props.size && props.sizeUnit
                ? props.size * 0.75 + props.sizeUnit
                : "7.5em"
              : ""};
        `}
      ></div>
    </>
  );
};

export default SBlock;
