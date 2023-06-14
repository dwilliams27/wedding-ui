import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Slide, ThemeProvider, createTheme, styled, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { Fonts } from '../utils/Fonts';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide onChange={(e: any) => {console.log(e)}} appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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
      fontFamily: Fonts.Cormorant,
      fontSize: 50
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

  const [displayBackground, setDisplayBackground] = React.useState(false);

  useEffect(() => {
    let prevY = 0;
    const listenScrollEvent = (e: Event) => {
      if (window.scrollY < prevY) {
        if (window.scrollY < 10) {
          setDisplayBackground(false);
        }
      }
      if (window.scrollY > 10) {
        setDisplayBackground(true);
      }
      
      prevY = window.scrollY;
    }
    window.addEventListener('scroll', listenScrollEvent)
  }, []);

  return (
    <React.Fragment>
      <div style={{marginTop: '-112px'}}>
        <CssBaseline />
        <HideOnScroll>
          <MuiAppBar sx={{ backgroundColor: "rgb(0, 0, 0, 0)", boxShadow: 0 }}>
            <Toolbar sx={{ 
                backgroundColor: displayBackground ? "#05200a" : "rgba(0, 0, 0, 0)",
                transition: "all 0.5s ease",
                WebkitTransition: "all 0.5s ease",
                MozTransition: "all 0.5s ease"
              }}
            disableGutters>
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
                sx={{ 
                  mr: 2, 
                  marginLeft: 
                  'auto',
                  ...(open && { display: 'none' }),
                  transition: "all 0.5s ease",
                  WebkitTransition: "all 0.5s ease",
                  MozTransition: "all 0.5s ease"
                }}
                onClick={handleDrawerOpen}
              >
                <MenuIcon fontSize="inherit" sx={{...(!displayBackground && {color: "#05200a"})}}/>
              </IconButton>
            </Toolbar>
          </MuiAppBar>
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