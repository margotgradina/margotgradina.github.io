import { css } from "@emotion/css";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faA } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";

interface Props {
  icon: IconProp;
  iconSize: SizeProp;
  labelId: string;
  text: string; //text to appear
  onClick: Function;
}

const MenuItem = (props: Props) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        /* width: 100px; */
      `}
    >
      <IconButton
        className={css`
          width: 40px;
          height: 40px;
        `}
        onClick={() => {
          props.onClick();
        }}
        onMouseEnter={() => {
          const label = document.getElementById(props.labelId);
          if (label) {
            label.style.opacity = "1";
            label.style.transform = "translateY(0)";
          }
        }}
        onMouseLeave={() => {
          const label = document.getElementById(props.labelId);
          if (label) {
            label.style.opacity = "0";
            label.style.transform = "translateY(10px)";
          }
        }}
      >
        <FontAwesomeIcon icon={props.icon} size={props.iconSize} />
      </IconButton>
      <label
        id={props.labelId}
        className={css`
          font-size: 0.9rem;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        `}
      >
        {props.text}
      </label>
    </div>
  );
};

export default MenuItem;
