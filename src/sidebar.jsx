import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// Icons
import HomeIcon from "@mui/icons-material/Home";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
//
import { Link } from "react-router-dom";
import { Collapse } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
const drawerWidth = 240;
// main
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
// Main

// App-Bar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// App-Bar
// DrawerHeader
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
// DrawerHeader
export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [colopen, setcolopen] = React.useState(false);
  const [seccol, setseccol] = React.useState(false);
  const [empcol, setempcol] = React.useState(false);
  const [repocoll, setrepocoll] = React.useState(false);
  const [cmscoll, setcmscoll] = React.useState(false);
  const [clicoll, setclicoll] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickone = () => {
    setseccol(!seccol);
  };
  const handleClick = () => {
    setcolopen(!colopen);
  };
  const repoClick = () => {
    setrepocoll(!repocoll);
  };

  const empclick = () => {
    setempcol(!empcol);
  };

  const cmsClick = () => {
    setcmscoll(!cmscoll);
  };

  const clientclick = () => {
    setclicoll(!clicoll);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Super Admin
          </Typography>
        </Toolbar>
      </AppBar>
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
          <h2>Ample Secure</h2>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* User Management */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>User Management </ListItemText>
              {colopen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {/* Collapse */}
          <Collapse in={colopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  <Link
                    to="/Create-Admin"
                    style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
                  >
                    Add Admin
                  </Link>
                </ListItemText>
              </ListItemButton>
              {/* Add Admin  */}
              {/* Add Risk Coordinator*/}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
           
           
                </ListItemText>
              </ListItemButton>
              {/* Add Risk Coordinator*/}
              {/* Add Employee */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  <Link
                    to="/Create-Employee"
                    style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
                  >
                    Add Employee
                  </Link>
                </ListItemText>
              </ListItemButton>
              {/* Add Employee */}
            </List>
          </Collapse>
          {/* Collapse */}

          {/* User Management */}

          {/* Super Admin*/}
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickone}>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText>Super Admin</ListItemText>
              {seccol ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={seccol} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  <Link
                    to="/Admin-Activity"
                    style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
                  >
                    Admin Activity
                  </Link>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  <Link
                    to="/All-Cases"
                    style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
                  >
                    See All Cases
                  </Link>
                </ListItemText>
              </ListItemButton>

              {/* see All Cases */}

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  {/* Admin Activity */}
                  <Link
                    to="/Assign-Cases"
                    style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
                  >
                    Assign Cases
                  </Link>
                </ListItemText>
              </ListItemButton>

              {/* see All Cases  */}
              {/* Assign Cases */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  {/* Admin Activity */}
                  <Link
                    to="/Pending-Cases"
                    style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
                  >
                    Pending Cases
                  </Link>
                </ListItemText>
              </ListItemButton>
              {/* Assign Cases */}
              {/* Pending Cases  */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>
                  {/* Admin Activity */}
                  Closed Cases
                </ListItemText>
              </ListItemButton>
              {/* Pending Cases */}
            </List>
          </Collapse>
          {/* Super Admin*/}

          {/* Employee */}
          <ListItem disablePadding>
            <ListItemButton onClick={clientclick}>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText>Client</ListItemText>
              {clicoll ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={clicoll} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Client Activity</ListItemText>
              </ListItemButton>
              {/*  */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Total Client</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>client</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Work Hours</ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          {/* Employee */}

          {/* Employee */}
          <ListItem disablePadding>
            <ListItemButton onClick={empclick}>
              <ListItemIcon>
                <BadgeOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Employee</ListItemText>
              {empcol ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={empcol} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Employee Activity</ListItemText>
              </ListItemButton>
              {/*  */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Total Cases</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Work Hours</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Work Hours</ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          {/* Employee */}
          {/* Report */}
          <ListItem disablePadding>
            <ListItemButton onClick={repoClick}>
              <ListItemIcon>
                <ReportGmailerrorredOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Report </ListItemText>
              {repocoll ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={repocoll} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Negative Client</ListItemText>
              </ListItemButton>
              {/*  */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Self Made</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Drop Cases</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Untraceable Cases</ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          {/* Contact us */}
          {/* Contact Us */}
          <ListItem disablePadding>
            <ListItemButton onClick={cmsClick}>
              <ListItemIcon>
                <ContactPageOutlinedIcon />
              </ListItemIcon>
              <ListItemText>CMS</ListItemText>
              {cmscoll ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={cmscoll} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Term & Condition</ListItemText>
              </ListItemButton>
              {/*  */}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>private Policy</ListItemText>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                <ListItemText>Career</ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

          {/* Contact us */}
        </List>
      </Drawer>
      <Main open={open}>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <Typography>{children}</Typography>
        </Box>
      </Main>
    </Box>
  );
}
