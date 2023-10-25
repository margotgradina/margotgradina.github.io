import {css} from "@emotion/css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Resume} from "../../types/types";
import {faInstagram, faLinkedin, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";
import {faLink} from "@fortawesome/fontawesome-free-solid";
import {mergeBreakpointsInOrder} from "@mui/system";

interface Props {
  resume: Resume;
}

const Socials = (props: Props) => {
  const {resume} = props;

  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case "Facebook":
        return faFacebook as IconProp;
        break;
      case "Instagram":
        return faInstagram as IconProp;
        break;
      case "Linkedin":
        return faLinkedin as IconProp;
        break;
      case "Github":
        return faGithub as IconProp;
        break;
    }
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        text-color: black;
        justify-content: center;
      `}
    >
      {resume?.profiles?.map((soc) => {
        const iconString = getIcon(soc.icon) as IconProp;
        return (
          <>
            <a
              className={css`
                color: #605f5e;
                padding: 5px;
              `}
              href={soc.url}
            >
              <FontAwesomeIcon icon={iconString} onClick={() => {}} size={"lg"} />
            </a>
          </>
        );
      })}
    </div>
  );
};

export default Socials;
