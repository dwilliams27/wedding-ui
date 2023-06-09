import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Fade, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import BeVietnam from '../fonts/BeVietnamPro-Regular.ttf';
import TopBar from './TopBar';

export default function MainPage() {
  let theme = createTheme({
    typography: {
      fontFamily: 'BeVietnam',
      button: {
        textTransform: 'none'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'BeVietnam';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('BeVietnam'), local('BeVietnam-Regular'), url(${BeVietnam}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <React.Fragment>
      <TopBar />
      <Fade in={true} timeout={2000}>
        <Container sx={{
          width: '100%',
          height: '100%',
          paddingLeft: 0,
          paddingRight: 0
        }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ position: 'relative' }}
          >
            <Box
              // 1.044
              component="img"
              sx={{
                width: '550px',
                height: '715px',
              }}
              alt="Market at grelen"
              src="/assets/primary_bw.jpg"
            />
            <Typography
              variant="h6"
              component="a"
              sx={{
                position: 'absolute',
                bottom: '3rem',
                fontFamily: 'TheSeasons',
                fontWeight: 500,
                fontSize: { xs: '64px', sm: '80px' },
                fontStyle: 'italic',
                lineHeight: 1,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              David & <br />
              Amanda
            </Typography>
            <br />
            <Typography
              variant="h6"
              component="a"
              sx={{
                position: 'absolute',
                bottom: '2rem',
                fontFamily: 'TheSeasons',
                fontWeight: 500,
                fontSize: { xs: '20px', sm: '32px' },
                fontStyle: 'italic',
                lineHeight: 1,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              May 26, 2024 | Somerset, VA
            </Typography>
          </Stack>
        </Container>
      </Fade>
    </React.Fragment>
  );
}