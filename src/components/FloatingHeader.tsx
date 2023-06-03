import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import LeftDrawer from './LeftDrawer';
import { Box, Button, Container, Grid, IconButton, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import TheSeasons from '../fonts/theseasons-reg.ttf';

interface ScrollProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ScrollProps) {
  const { children } = props;

  return React.cloneElement(children, {
    elevation: 0,
  });
}

export default function FloatingHeader() {
  let theme = createTheme({
    typography: {
      fontFamily: 'TheSeasons',
      button: {
        textTransform: 'none'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'TheSeasons';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('TheSeasons'), local('TheSeasons-Regular'), url(${TheSeasons}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <div style={{ marginTop: '-100px' }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar style={{ background: 'rgba(100, 100, 100, 0.3)' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2 }}
            >
              <img id='main-logo' src="favicon.ico" alt="logo" width="64" height="64"/>
            </IconButton>
            <ThemeProvider theme={theme}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Button sx={{width: '33.33%'}}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      fontFamily: 'TheSeasons',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Our Story
                  </Typography>
                </Button>
                <Button sx={{width: '33.33%'}}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      fontFamily: 'TheSeasons',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'white',
                      textDecoration: 'none'
                    }}
                  >
                    Venue
                  </Typography>
                </Button>
                <Button sx={{width: '33.33%'}}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      fontFamily: 'TheSeasons',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    Additional Details
                  </Typography>
                </Button>
              </Box>
            </ThemeProvider>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}