import React from "react";
import TopBar from "./TopBar";
import { Box, Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme } from "@mui/material";
import { Fonts } from "../utils/Fonts";

export default function Travel() {
  const contentTheme = createTheme({
    typography: {
      fontFamily: [
        'EB Garamond',
        'serif',
      ].join(','),
    },
  });

  const theme = createTheme({
    typography: {
      fontFamily: Fonts.Cormorant,
      fontSize: 35
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
          <ThemeProvider theme={theme}>
            <Typography sx={{ marginTop: '75px', color: '#05200a', zIndex: 1 }}>
              THE MARKET AT GRELEN
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
              Ceremony and reception will be at <a href='https://www.themarketatgrelen.com/'>The Market at Grelen</a>, located in Somerset VA.
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}