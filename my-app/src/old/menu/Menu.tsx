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
import { faBars, faMarsAndVenus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ListItem } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import { css } from "@emotion/css";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface Props {
  children: React.ReactElement;
}

const Menu = (props: Props) => {
  const drawerWidth = 200;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      className={css`
        display: flex;
      `}
    >
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
            icon={faBars as IconProp}
            onClick={handleDrawerOpen}
            size={"sm"}
          />
        </IconButton>
      </div>

      <Drawer
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
          <IconButton onClick={handleDrawerClose}>
            <FontAwesomeIcon icon={faBars as IconProp} size={"sm"} />
          </IconButton>
        </DrawerHeader>
        {/* <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton>
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
      {props.children}
    </Box>
  );
};

export default Menu;
