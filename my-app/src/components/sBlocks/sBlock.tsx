import {useEffect, useState} from "react";
import SBlockUnit from "./sBlockUnit";

interface Props {
  type: string;
  rotate: 0 | 90 | 180 | 270;
  colour: string;
  size: number;
  sizeUnit: string;
  onClick?: Function;
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

  const handleClick = () => {
    if (props?.onClick) {
      props.onClick();
    }
  };

  const calculateBorderRadius = () => {
    console.log("test");
    return "30px 30px 30px 0px";
  };

  // useEffect(() => {
  //   if (size && sizeUnit && bR) {
  //     const TL: string = props.topLeftBR ? bR : "0px";
  //     const TR: string = props.topRightBR ? bR : "0px";
  //     const BR: string = props.bottomRightBR ? bR : "0px";
  //     const BL: string = props.bottomLeftBR ? bR : "0px";
  //     console.log(TL + " " + TR + " " + BR + " " + BL);
  //     setBorderRadius(TL + " " + TR + " " + BR + " " + BL);
  //   }
  // }, [props?.topLeftBR, props?.topRightBR, props.bottomLeftBR, props.bottomRightBR]);

  return (
    <div onClick={() => handleClick()}>
      {props.type == "FULL" && (
        <SBlockUnit
          topLeftBR={false}
          topRightBR={false}
          bottomRightBR={false}
          bottomLeftBR={false}
          colour={props?.colour}
          rotate={rotate}
          size={props.size}
          sizeUnit={props.sizeUnit}
          borderRadius={calculateBorderRadius()}
        />
      )}
      {props.type == "QUARTERCIRCLE" && (
        <SBlockUnit
          topLeftBR={true}
          topRightBR={false}
          bottomRightBR={false}
          bottomLeftBR={false}
          colour={props?.colour}
          rotate={rotate}
          size={props.size}
          sizeUnit={props.sizeUnit}
          borderRadius={calculateBorderRadius()}
        />
      )}
      {props.type == "HALFSTADIUM" && (
        <SBlockUnit
          topLeftBR={true}
          topRightBR={true}
          bottomRightBR={false}
          bottomLeftBR={false}
          colour={props?.colour}
          rotate={rotate}
          size={props.size}
          sizeUnit={props.sizeUnit}
          borderRadius={calculateBorderRadius()}
        />
      )}
      {props.type == "ELLIPS" && (
        <SBlockUnit
          topLeftBR={true}
          topRightBR={false}
          bottomRightBR={true}
          bottomLeftBR={false}
          colour={props?.colour}
          rotate={rotate}
          size={props.size}
          sizeUnit={props.sizeUnit}
          borderRadius={calculateBorderRadius()}
        />
      )}
      {props.type == "DROP" && (
        <SBlockUnit
          topLeftBR={false}
          topRightBR={true}
          bottomRightBR={true}
          bottomLeftBR={true}
          colour={props?.colour}
          rotate={rotate}
          size={props.size}
          sizeUnit={props.sizeUnit}
          borderRadius={calculateBorderRadius()}
        />
      )}
      {props.type == "CIRCLE" && (
        <SBlockUnit
          topLeftBR={true}
          topRightBR={true}
          bottomRightBR={true}
          bottomLeftBR={true}
          colour={props?.colour}
          rotate={rotate}
          size={props.size}
          sizeUnit={props.sizeUnit}
          borderRadius={calculateBorderRadius()}
        />
      )}
    </div>
  );
};

export default SBlock;
