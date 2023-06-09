import React from "react";
import TopBar from "./TopBar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/system";
import { Divider, Fade, Typography } from "@mui/material";
import BeVietnam from '../fonts/BeVietnamPro-Regular.ttf';

export default function Venue() {
  let bvtheme = createTheme({
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

  const contentTheme = createTheme({
    typography: {
      fontFamily: [
        'EB Garamond',
        'serif',
      ].join(','),
    },
  });
  
  return (
    <React.Fragment>
      <TopBar />
      <Fade in={true} timeout={2000}>
        <Stack sx={{ 
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          width: '80vw'
        }}>
          <ThemeProvider theme={bvtheme}>
            <Typography variant="h2" sx={{ fontFamily: 'BeVietnam', fontSize: '60px', fontWeight: '300', marginTop: '100px', fontStyle: 'italic' }}>
              The Market at Grelen
            </Typography>
          </ThemeProvider>
          <Box
            // 1.044
            component="img"
            sx={{
              width: '350px',
              height: '365px',
            }}
            alt="Market at grelen"
            src="/assets/market.jpeg"
          />
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '1.25rem' }}>
              David and Amanda met as most ~young~ couples do, a dating app (bonus points if you know which one!) 
              <br /><br />
              Their first date was in a small Korean restaurant in Georgetown, DC, filled with laughter and too much spicy pork bulgogi. 
              Despite starting off long distance, their love continued to grow, fostered by Facetime calls and Amtrak trips. 
              <br /><br />
              After four years together, David proposed to Amanda amongst volcanic rock and clouds, marking the beginnings of a new chapter. 
              <br /><br />
              We are so excited to have you with us as we celebrate the start of our next adventure together!
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}