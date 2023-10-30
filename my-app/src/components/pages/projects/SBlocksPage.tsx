import {css} from "@emotion/css";
import SblockGrid from "../../sBlocks/sBlockGrid";
import BasicButton from "../../general/BasicButton";
import {useNavigate} from "react-router-dom";

const SBlocksPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        height: 90%;
        flex: 1;
        align-items: center;
        align-self: flex-end;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
      `}
    >
      <SblockGrid />
      <BasicButton onClick={() => navigate("/projects")} label={"Back to projects"} />
    </div>
  );
};

export default SBlocksPage;
