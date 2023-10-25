import {getOuterBindingIdentifiers} from "@babel/types";
import {css} from "@emotion/css";
import {useEffect, useState} from "react";

interface sBlockProps {
  size?: number;
  sizeUnit?: string;
  topLeftBR?: boolean; //border radius for each corner on or off;
  topRightBR?: boolean;
  bottomLeftBR?: boolean;
  bottomRightBR?: boolean;
  colour?: string;
  rotate?: "0deg" | "90deg" | "180deg" | "270deg" | null;
}

const SBlockUnit = (props: sBlockProps) => {
  const [size, setSize] = useState<number>(props?.size ? props.size : 10);
  const [sizeUnit, setSizeUnit] = useState<string>(props?.sizeUnit ? props.sizeUnit : "em");
  const [bR, setBR] = useState<string>(props?.size && props?.sizeUnit ? props.size * 0.75 + props.sizeUnit : "7.5em");
  const [borderRadius, setBorderRadius] = useState<string>("0px 0px 0px 0px");

  //sets the shape of the object
  useEffect(() => {
    console.log("s-block");
    console.log(size, sizeUnit, bR);

    if (size && sizeUnit && bR) {
      const TL: string = props.topLeftBR ? bR : "0px";
      const TR: string = props.topRightBR ? bR : "0px";
      const BR: string = props.bottomRightBR ? bR : "0px";
      const BL: string = props.bottomLeftBR ? bR : "0px";
      setBorderRadius(TL + " " + TR + " " + BR + " " + BL);
    }
  }, [props?.topLeftBR, props?.topRightBR, props.bottomLeftBR, props.bottomRightBR]);

  console.log(borderRadius);

  return (
    <>
      <div
        className={css`
          background-color: ${props?.colour || "#000"};
          width: ${size + sizeUnit};
          height: ${size + sizeUnit};
          border-radius: ${borderRadius};
          transform: rotate(${props?.rotate ? props.rotate : "0deg"});
        `}
      ></div>
    </>
  );
};

export default SBlockUnit;
