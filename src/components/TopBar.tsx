import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Slide, ThemeProvider, createTheme, styled, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";

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


export default function TopBar() {
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Dancing Script',
        'cursive',
      ].join(','),
      fontSize: 60
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function navigateTo(page: string) {
    handleDrawerClose();
    setTimeout(() => navigate(page), 200);
  }

  return (
    <React.Fragment>
      <div style={{marginTop: '-112px'}}>
        <CssBaseline />
        <HideOnScroll>
          <AppBar style={{ background: 'rgba(100, 100, 100, 0.3)' }}>
            <Toolbar disableGutters>
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => navigateTo('/')}
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
                <MenuIcon fontSize="inherit"/>
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
          <List sx={{ 
            height: '100vh', 
            backgroundColor: '#e0ddd5', 
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            marginTop: '-1px' 
          }}>
            {[{ text: 'Our Story', page: '/our-story'}, { text: 'Venue', page: '/venue' }, { text: 'Additional Details', page: '/additional-details' }].map((link, index) => (
              <ListItem key={link.text} sx={{ marginBottom: '20px' }} disablePadding>
                <ListItemButton onClick={() => navigateTo(link.page)}>
                  <ThemeProvider theme={theme}>
                    <ListItemText primary={link.text} sx={{ textAlign: 'center' }}/>
                  </ThemeProvider>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
}