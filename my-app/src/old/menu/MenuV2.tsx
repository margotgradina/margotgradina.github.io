import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faA,
  faBars,
  faC,
  faEnvelope,
  faFaceSmileWink,
  faI,
  faL,
  faM,
  faMarsAndVenus,
  faP,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { ListItem, Tooltip } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { css } from "@emotion/css";
import { useState } from "react";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { LightTooltip } from "./Tooltip";
import MenuItem from "./MenuItem";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  alignItems: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  children?: React.ReactElement;
}

const MenuV2 = (props: Props) => {
  const [drawerWidth, setDrawerWidth] = useState<number>(200);
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <div
        className={css`
          display: flex;
          position: fixed;
        `}
      >
        <IconButton onClick={handleDrawerOpen}>
          <FontAwesomeIcon
            color="black"
            icon={faM as IconProp}
            onClick={handleDrawerOpen}
            size={"sm"}
          />
        </IconButton>
      </div>

      <Drawer
        className={css`
          width: ${drawerWidth};
          display: flex;
          align-items: center;
          justify-content: center;
        `}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <MenuItem
            onClick={() => console.log("go to menu")}
            labelId={"Menu"}
            icon={faM as IconProp}
            iconSize={"sm" as SizeProp}
            text={""}
          />
          <MenuItem
            onClick={() => console.log("go go to about")}
            labelId={"About"}
            icon={faA as IconProp}
            iconSize={"sm" as SizeProp}
            text={"BOUT"}
          />
          <MenuItem
            onClick={() => console.log("go to portfolio")}
            labelId={"Portfolio"}
            icon={faP as IconProp}
            iconSize={"sm" as SizeProp}
            text={"ORTFOLIO"}
          />
          <MenuItem
            onClick={() => console.log("go to insta")}
            labelId={"Instagram"}
            icon={faI as IconProp}
            iconSize={"sm" as SizeProp}
            text={"NSTAGRAM"}
          />
          <MenuItem
            onClick={() => console.log("go to linkein")}
            labelId={"Linkedin"}
            icon={faL as IconProp}
            iconSize={"sm" as SizeProp}
            text={"INKEDIN"}
          />
        </DrawerHeader>

        {/* <Divider /> */}
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton> */}
        {/* <FontAwesomeIcon
                  icon={faMarsAndVenus as IconProp}
                  onClick={() => {}}
                  size={"sm"}
                /> */}
        {/* <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        {/* </List>
        <Divider />  */}
      </Drawer>
      {/* {props.children} */}
    </>
  );
};

export default MenuV2;
