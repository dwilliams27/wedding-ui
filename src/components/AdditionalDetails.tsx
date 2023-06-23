import React from "react";
import TopBar from "./TopBar";
import { Box, Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme } from "@mui/material";
import { Fonts } from "../utils/Fonts";

export default function AdditionalDetails() {
  const contentTheme = createTheme({
    typography: {
      fontFamily: Fonts.Abhaya,
    },
  });

  const headerTheme = createTheme({
    typography: {
      fontFamily: Fonts.Cormorant,
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
          <ThemeProvider theme={headerTheme}>
            <Typography sx={{ marginTop: '100px', fontSize: '3rem' }}>
              ADDITIONAL DETAILS
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '1.25rem' }}>
            Formal invitations will be sent out for RSVPs. More details around hotel block and schedule coming soon.
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}