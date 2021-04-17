import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TimelineIcon from "@material-ui/icons/Timeline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreateIcon from "@material-ui/icons/Create";

import { Link } from "react-router-dom";
import urls from "../../urls";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "black",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 2,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "gray",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    background: "#D7E1E9",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButtonLang: {
    position: "absolute",
    top: "25%",
    right: 0,
    marginRight: theme.spacing(2),
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, Setopnen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [jwt, setJwt] = useState(null);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    Setopnen(true);
  };

  const handleDrawerClose = () => {
    Setopnen(false);
  };

  useEffect(() => {
    setJwt(localStorage.getItem("token"));
  }, []);

  const itemList = [
    {
      id: 1,
      text: "Home",
      icon: <HomeIcon />,
      link: urls.home,
    },
    {
      id: 2,
      text: "Map",
      icon: <ViewCarouselIcon />,
      link: urls.map,
    },
    {
      id: 3,
      text: "About",
      icon: <InfoIcon />,
      link: urls.about,
    },
    {
      id: 4,
      text: "Contacts",
      icon: <ContactsIcon />,
      link: urls.contacts,
    },
    {
      id: 5,
      text: "Login",
      icon: <ExitToAppIcon />,
      link: urls.login,
    },
    {
      id: 6,
      text: "Register",
      icon: <CreateIcon />,
      link: urls.registration,
    },
    // {
    //   id: 7,
    //   text: "User",
    //   icon: <AccountBoxIcon />,
    //   link: urls.user,
    // },
    {
      id: 7,
      text: "Challenges",
      icon: <TimelineIcon />,
      link: urls.challenges,
    },
  ];

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <Typography style={{ marginLeft: "30px" }}>
            <div className={classes.menuButtonLang}>
              {jwt !== null && jwt.accessToken ? (
                <Button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                  color="secondary"
                >
                  Logout
                </Button>
              ) : null}
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ backgroundColor: "white" }}
              >
                EN
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    changeLanguage("ua");
                    handleClose();
                  }}
                >
                  UA
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    changeLanguage("ru");
                    handleClose();
                  }}
                >
                  RU
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    changeLanguage("en");
                    handleClose();
                  }}
                >
                  EN
                </MenuItem>
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={styles.menuText}>
            <h3>Menu</h3>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemList.map((item, index) => (
            <Link
              key={item.id}
              to={item.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItem>
            </Link>
          ))}
          {jwt !== null && jwt.accessToken ? (
            <Link
              to={urls.user}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText>User</ListItemText>
              </ListItem>
            </Link>
          ) : null}
        </List>
        <Divider />
      </Drawer>
      <Toolbar />
    </div>
  );
}
