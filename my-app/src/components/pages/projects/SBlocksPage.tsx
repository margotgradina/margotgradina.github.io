import {css} from "@emotion/css";
import SblockGrid from "../../sBlocks/sBlockGrid";

const SBlocksPage = () => {
  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        height: 97%;
        align-items: center;
        align-self: flex-end;
        justify-content: center;
        flex-direction: row;
        gap: 1rem;
      `}
    >
      <SblockGrid />
    </div>
  );
};

export default SBlocksPage;
