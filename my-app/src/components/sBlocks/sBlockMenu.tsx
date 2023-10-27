import {css} from "@emotion/css";
import SBlock from "./sBlock";
import BasicButton from "../general/BasicButton";
import {SketchPicker} from "react-color";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import ColourPicker from "../general/ColourPicker";

interface Props {
  currentColour: any;
  setCurrentColour: Function;
  showColourPicker: boolean;
  setShowColourPicker: Function;
}

const SBlockMenu = (props: Props) => {
  const {currentColour, setCurrentColour: setCurrentColour, showColourPicker, setShowColourPicker} = props;
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 10vw;
          min-width: 100px;
          max-width: 200px;
          height: 90%;
          border-radius: 10px;
          box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
          border: 1px solid grey;
          font-family: "Raleway";
          font-weight: 400;
          font-size: 1rem;
          gap: 1vh;
        `}
      >
        <label
          className={css`
            padding-left: 1vw;
            padding-top: 0.5vw;
            width: 100%;
            justify-content: flex-start;
          `}
        >
          Choose a colour:
        </label>
        {/* COLOURPICKER */}
        <div
          className={css`
            padding-left: 1vw;
            justify-content: flex-start;
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 1vw;
          `}
        >
          <div
            onClick={() => {
              setShowColourPicker(true);
            }}
            className={css`
              width: 1vw;
              height: 1vw;
              border: 0.5px solid grey;
              border-radius: 5px;
              background-color: ${currentColour?.hex || "transparent"};
            `}
          ></div>
          <label
            className={css`
              display: flex;
              min-width: 2vw;
            `}
          >
            {currentColour?.hex}
          </label>
        </div>

        <label
          className={css`
            padding-left: 1vw;
            padding-top: 0.5vw;
            width: 100%;
            justify-content: flex-start;
          `}
        >
          Choose a shape:
        </label>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              gap: 0.5rem;
            `}
          >
            <SBlock type={"FULL"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"QUARTERCIRCLE"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"HALFSTADIUM"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              gap: 0.5rem;
            `}
          >
            <SBlock type={"ELLIPS"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"DROP"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"CIRCLE"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
          </div>
        </div>
        {/* BUTTONS FOR ADJUSTING */}
        <div
          className={css`
            display: flex;
            height: 100%;
            width: 100%;
            flex-direction: column;
            gap: 1vh;
            padding-top: 1vh;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <BasicButton
            width={"8.5vw"}
            onClick={() => {
              console.log("todo rotate");
            }}
            label={"Rotate 90Deg"}
          />
        </div>
        {/* BUTTONS FOR EXPORTING */}
        <div
          className={css`
            display: flex;
            height: 100%;
            width: 100%;
            padding-bottom: 1vh;
            flex-direction: column;
            gap: 1vh;
            align-items: center;
            justify-content: flex-end;
          `}
        >
          <BasicButton
            width="8.5vw"
            onClick={() => {
              console.log("todo save pdf");
            }}
            label={"Save as PDF"}
          />
          <BasicButton
            width={"8.5vw"}
            onClick={() => {
              console.log("todo save png");
            }}
            label={"Save as PNG"}
          />
        </div>

        {showColourPicker && (
          <ColourPicker
            colour={currentColour}
            setColour={setCurrentColour}
            setShowColourPicker={setShowColourPicker}
            showColourPicker={showColourPicker}
          />
        )}
      </div>
    </>
  );
};

export default SBlockMenu;
