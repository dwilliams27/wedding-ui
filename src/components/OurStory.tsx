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
          width: { xs: '80vw', lg: '60wv' },
          zIndex: 1
        }}>
          <Box
            component="img"
            sx={{
              position: 'absolute',
              left: { xs: '-50%', lg: '-30%' },
              marginTop: '100px',
              maxWidth: { xs: '85%', sm: '70%', lg: '50%' },
              opacity: '0.3'
            }}
            alt="Florals."
            src="/assets/f1.png"
          />
          <Box
            component="img"
            sx={{
              position: 'absolute',
              right: { xs: '-60%', lg: '-30%' },
              marginTop: '375px',
              maxWidth: { xs: '85%', sm: '70%', lg: '50%' },
              zIndex: 2,
              opacity: '0.2'
            }}
            alt="Florals."
            src="/assets/f2.png"
          />
          <ThemeProvider theme={theme}>
            <Typography sx={{ marginTop: '4.5rem', color: '#05200a', zIndex: 1 }}>
              OUR STORY
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '25px', marginBottom: '25px', zIndex: 1 }}/>
          <Box
            component="img"
            sx={{
              marginLeft: '200px',
              marginRight: '200px',
              maxWidth: { xs: '70%', sm: '50%', md: '40%', lg: '30%' },
              zIndex: 1
            }}
            alt="David and amanda in black and white."
            src="/assets/bw_original.jpg"
          />
          <Divider flexItem sx={{ marginTop: '25px', marginBottom: '25px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '1.25rem', maxWidth: '80vw' }}>
              <div style={{ zIndex: 3 }}>David and Amanda met as most ~young~ couples do, a dating app (bonus points if you know which one!)</div>
              <Box
                component="img"
                sx={{
                  position: 'absolute',
                  right: { xs: '-15%', sm: '-20%', md: '-25%' },
                  marginTop: { xs: '-100px', md: '0' },
                  maxWidth: { xs: '110%', sm: '90%' },
                  opacity: '0.2',
                  zIndex: -1
                }}
                alt="Florals."
                src="/assets/f3.png"
              />
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: '140%', md: '100%', lg: '70%' },
                  marginLeft: { xs: '-20%', md: '0', lg: '15%' },
                  marginTop: '25px',
                  marginBottom: '10px',
                  zIndex: 3
                }}
                alt="Pics of David and Amanda."
                src="/assets/overlapping_1.png"
              />
              <Box
                component="img"
                sx={{
                  position: 'absolute',
                  left: { xs: '-50%', lg: '-30%' },
                  marginTop: { xs: '-125px', lg: 0 },
                  maxWidth: { xs: '85%', sm: '30%' },
                  opacity: '0.3',
                  transform: 'rotate(45deg)',
                  zIndex: -1
                }}
                alt="Florals."
                src="/assets/f4.png"
              />
              <br />
              Their first date was in a small Korean restaurant in Georgetown, DC, filled with laughter and too much spicy pork bulgogi. 
              Despite starting off long distance, their love continued to grow, fostered by Facetime calls and Amtrak trips. 
              <Box
                component="img"
                sx={{
                  position: 'absolute',
                  right: { xs: '-50%', lg: '-30%' },
                  marginTop: { xs: '-300px', lg: 0 },
                  maxWidth: { xs: '70%', sm: '60%', lg: '30%' },
                  opacity: '0.3',
                  transform: 'rotate(-135deg)'
                }}
                alt="Florals."
                src="/assets/f5.png"
              />
              <br /><br />
              After four years together, David proposed to Amanda in Maui, marking the beginning of a new chapter. 
              <br /><br />
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: '170%', md: '100%', lg: '70%' },
                  marginLeft: { xs: '-20%', md: '0', lg: '15%' },
                  marginBottom: '10px',
                  zIndex: 3
                }}
                alt="Pics of David and Amanda."
                src="/assets/overlapping_2.png"
              />
              <br />
              We are so excited to have you with us as we celebrate the start of our next adventure together!
              <Box
                component="img"
                sx={{
                  position: 'absolute',
                  left: { xs: '-20%', lg: '-10%' },
                  marginTop: { xs: '-125px', lg: '-300px' },
                  maxWidth: { xs: '85%', sm: '70%', lg: '30%' },
                  opacity: '0.3'
                }}
                alt="Florals."
                src="/assets/f6.png"
              />
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}