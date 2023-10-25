import {css} from "@emotion/css";
import "./Spinner.css";

const SpinnerComponent = () => {
  return (
    <div
      className={css`
        border: 1px solid;
      `}
    >
      <div className={"spinner-container"}>
        <div className={"spinner-element"}>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerComponent;
