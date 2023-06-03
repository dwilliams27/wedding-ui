import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import LeftDrawer from './LeftDrawer';
import { Container, Grid, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
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
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar>
              <img src="favicon.ico" alt="icon" width="64" height="64"/>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'TheSeasons',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'TheSeasons',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Venue
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'TheSeasons',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Additional Details
                </Typography>
              </ThemeProvider>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}