import {useEffect, useState} from "react";
import SBlockUnit from "./sBlockUnit";

interface Props {
  type: "FULL" | "QUARTERCIRCLE" | "HALFSTADIUM" | "ELLIPS" | "DROP" | "CIRCLE";
  rotate: 0 | 90 | 180 | 270;
  colour: string;
  size: number;
  sizeUnit: string;
}

const SBlock = (props: Props) => {
  const [rotate, setRotate] = useState<"0deg" | "90deg" | "180deg" | "270deg" | null | undefined>(null);

  useEffect(() => {
    switch (props.rotate) {
      case 0:
        setRotate("0deg");
        break;
      case 90:
        setRotate("90deg");
        break;
      case 180:
        setRotate("180deg");
        break;
      case 270:
        setRotate("270deg");
        break;
      default:
        setRotate(null);
    }
  }, [props.rotate]);

  return (
    <>
      {props.type == "FULL" && (
        <SBlockUnit topLeftBR={false} topRightBR={false} bottomRightBR={false} bottomLeftBR={false} colour={props.colour} rotate={rotate} />
      )}
      {props.type == "QUARTERCIRCLE" && (
        <SBlockUnit topLeftBR={true} topRightBR={false} bottomRightBR={false} bottomLeftBR={false} colour={props.colour} rotate={rotate} />
      )}
      {props.type == "HALFSTADIUM" && (
        <SBlockUnit topLeftBR={true} topRightBR={true} bottomRightBR={false} bottomLeftBR={false} colour={props.colour} rotate={rotate} />
      )}
      {props.type == "ELLIPS" && (
        <SBlockUnit topLeftBR={true} topRightBR={false} bottomRightBR={true} bottomLeftBR={false} colour={props.colour} rotate={rotate} />
      )}
      {props.type == "DROP" && (
        <SBlockUnit topLeftBR={false} topRightBR={true} bottomRightBR={true} bottomLeftBR={true} colour={props.colour} rotate={rotate} />
      )}
      {props.type == "CIRCLE" && (
        <SBlockUnit topLeftBR={true} topRightBR={true} bottomRightBR={true} bottomLeftBR={true} colour={props.colour} rotate={rotate} />
      )}
    </>
  );
};

export default SBlock;
