import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Fade, Stack, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import TheSeasons from '../fonts/theseasons-reg.ttf';
import TopBar from './TopBar';
import { ThemeProvider } from '@emotion/react';

export default function MainPage() {
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
              component="img"
              sx={{
                marginTop: '-275px',
                width: '800px',
                height: '1200px',
              }}
              alt="Us in field"
              src="/assets/ad_field.jpg"
            />
            <ThemeProvider theme={theme}>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  position: 'absolute',
                  bottom: '18rem',
                  fontFamily: 'TheSeasons',
                  fontWeight: 500,
                  fontSize: { xs: '42px', sm: '80px' },
                  fontStyle: 'italic',
                  lineHeight: 1,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                David & Amanda
              </Typography>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  position: 'absolute',
                  bottom: '16rem',
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
            </ThemeProvider>
          </Stack>
        </Container>
      </Fade>
    </React.Fragment>
  );
}