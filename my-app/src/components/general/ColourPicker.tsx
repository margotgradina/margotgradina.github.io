import {css} from "@emotion/css";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SketchPicker} from "react-color";

interface ColourPickerProps {
  colour: any;
  setColour: Function;
  showColourPicker: boolean;
  setShowColourPicker: Function;
}
const ColourPicker = (props: ColourPickerProps) => {
  const {colour, setColour, showColourPicker, setShowColourPicker} = props;

  return (
    <>
      <div
        className={css`
          position: absolute;
          height: max-content;
          width: max-content;
          z-index: 1000;
          display: flex;
          top: 0;
          flex-direction: column;
          gap: 5px;
        `}
      >
        <SketchPicker
          color={colour}
          onChange={(colour: any) => {
            setColour(colour);
          }}
          onChangeComplete={() => {
            // setShowColourPicker(false);
          }}
        />
        <FontAwesomeIcon
          icon={faCircleXmark}
          size={"lg"}
          color="#BDD364"
          onClick={() => {
            setShowColourPicker(false);
          }}
        />
      </div>
    </>
  );
};

export default ColourPicker;
