import { useEffect, useState } from "react";
import AlphabetIcon from "./alphabetIcons/AlphabetIcon";
import { css } from "@emotion/css";

interface TabProps {
  tabName: string;
  onClick: Function;
}

const MenuTab = (props: TabProps) => {
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    const nameArray: string[] = props.tabName.split("");
    setArray(nameArray);
  }, []);

  return (
    <div
      onClick={() => props.onClick()}
      className={css`
        display: flex;
        flex-direction: column-reverse;
        height: 100%;
        width: auto;
        gap: 0.1rem;
      `}
    >
      {array?.map((item) => (
        <AlphabetIcon
          letter={item}
          direction="VERTICAL"
          height={"9vh"}
          width="9vh"
          padding={"5px 0px 00px 0px"}
        />
      ))}
    </div>
  );
};

export default MenuTab;
