import {useEffect, useState} from "react";
import AlphabetIcon from "../alphabetIcons/AlphabetIcon";
import {css} from "@emotion/css";
import {reverse} from "dns";

interface TabProps {
  tabName: string;
  onClick: Function;
}

const MenuTab = (props: TabProps) => {
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    const nameArray: string[] = props.tabName.split("");
    setArray(nameArray.reverse());
  }, []);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        /* background-color: #000000; */
        justify-content: flex-end;
      `}
    >
      <div
        key={"MenuTab_" + props?.tabName}
        onClick={() => props.onClick()}
        className={css`
          display: flex;
          flex-direction: column;
          height: auto;
          width: auto;
          gap: 0.01rem;
          cursor: pointer;

          @keyframes wiggle {
            0% {
              transform: rotate(0deg);
            }
            15% {
              transform: rotate(2deg);
            }
            30% {
              transform: rotate(-2deg);
            }
            45% {
              transform: rotate(2deg);
            }
            60% {
              transform: rotate(-2deg);
            }
            75% {
              transform: rotate(1deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          &:hover {
            animation: wiggle 0.4s ease-in-out;
          }
        `}
      >
        {array?.map((item) => (
          <AlphabetIcon letter={item} rotate={270} height={"2.5vw"} width={"2.5vw"} padding={"5px 0px 00px 0px"} label={"menutab_letter"} />
        ))}
      </div>
    </div>
  );
};

export default MenuTab;
