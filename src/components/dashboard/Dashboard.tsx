import { useState } from "react";

// Theme personalization of Material UI
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

// CSS & Drawer(Menú desplegable)
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";

// Nav Bar
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Material Lists
import List from "@mui/material/List";

// Icons
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications"

// Material Grids & Box
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// List for Menu
import { MenuItem } from "./MenuItem";
import { Icon } from "@mui/material";
import NewEditor from "../editor/NewEditor";
import { TipTapEditor } from "../editor/TipTapEditor";


// Width for Drawer Menu
const drawerWidth: number = 240;

// Props from AppBar
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// AppBar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}))

// Drawer Menu
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      // Breakpoints to media queries of CSS different display sizes(Responsive)
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

// Define Theme
const myTheme = createTheme()

// Dashboard content
// TODO: Refactor with Navigation Components
const Dashboard = () => {

  const [open, setOpen] = useState(true)

  // Show/Hide Drawer Menu
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={myTheme} >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <ToolBar sx={{ pr: '24px' }}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{ 
                marginRigth: '36px',
                ...(open && {
                  display: 'none'
                })  
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* Title of App */}
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{
                flexGrow: 1
              }}
            >
              Code Verification Katas
            </Typography>
            {/* Icon to show notifications */}
            <IconButton color='inherit'>
              <Badge badgeContent={10} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* Icon to logout */}
            <IconButton color='inherit'>
              <LogoutIcon />
            </IconButton>
          </ToolBar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <ToolBar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            {/* Icon to Hide Menu */}
            <IconButton color='inherit' onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </ToolBar>
          <Divider />
          {/* List of menu items */}
          <List component='nav'>
            { MenuItem }
          </List>
        </Drawer>
        {/* Dashboard Content */}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <ToolBar />
          {/* Container with the content */}
          {/* TODO: Change for the navigation content by URL and Stack of Route */}
          <Container maxWidth='lg' sx={{ mt: 4, mg: 4 }}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 400
              }}>
                {/* Code Editor */}
                {<NewEditor />}
                {/* <TipTapEditor /> */}
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )

}

export default Dashboard