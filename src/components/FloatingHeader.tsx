import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Slide, ThemeProvider, createTheme, responsiveFontSizes, styled, useScrollTrigger, useTheme } from '@mui/material';
import TheSeasons from '../fonts/theseasons-reg.ttf';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ClearIcon from '@mui/icons-material/Clear';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function FloatingHeader(props: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <React.Fragment>
      <div style={{marginTop: '-112px'}}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar style={{ background: 'rgba(100, 100, 100, 0.3)' }}>
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: { sm: 2 }, ml: 0.5 }}
              >
                <img id='main-logo' src="favicon.ico" alt="logo" width="64" height="64"/>
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, marginLeft: 'auto', ...(open && { display: 'none' }) }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon  fontSize="inherit"/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <DrawerHeader />
        <Drawer
          sx={{
            flexShrink: 0
          }}
          variant="persistent"
          anchor="top"
          open={open}
        >
          <DrawerHeader sx={{ backgroundColor: '#e0ddd5' }}>
            <IconButton onClick={handleDrawerClose} sx={{ ml: 'auto' }}>
              <ClearIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ height: '100vh', backgroundColor: '#e0ddd5' }}>
            {['Our Story', 'Venue', 'Additional Details'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} sx={{ textAlign: 'center', fontSize: '4rem' }}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
}