import { Box, Stack } from "@mui/system";
import React from "react";
import TopBar from "./TopBar";
import { Divider, Fade, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Fonts } from "../utils/Fonts";

export default function OurStory() {
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
            <Typography sx={{ marginTop: '75px', color: '#05200a' }}>
              OUR STORY
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '25px', marginBottom: '25px' }}/>
          <Box
            // 1.044
            component="img"
            sx={{
              marginLeft: '200px',
              marginRight: '200px',
              maxWidth: { xs: '70%', sm: '50%', md: '40%', lg: '30%' }
            }}
            alt="David and amanda in black and white."
            src="/assets/bw_original.jpg"
          />
          <Divider flexItem sx={{ marginTop: '25px', marginBottom: '25px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '1.25rem', maxWidth: '80vw' }}>
              David and Amanda met as most ~young~ couples do, a dating app (bonus points if you know which one!) 
              <br /><br />
              Their first date was in a small Korean restaurant in Georgetown, DC, filled with laughter and too much spicy pork bulgogi. 
              Despite starting off long distance, their love continued to grow, fostered by Facetime calls and Amtrak trips. 
              <br /><br />
              After four years together, David proposed to Amanda in Maui, marking the beginning of a new chapter. 
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