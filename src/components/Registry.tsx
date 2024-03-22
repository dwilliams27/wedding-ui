import React from "react";
import TopBar from "./TopBar";
import { Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme, Box, Link, Grid, Card, CardContent, Container, Paper, List, ListItem, ListItemText } from "@mui/material";
import { Fonts } from "../utils/Fonts";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export default function Registry() {
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
            <Typography sx={{ fontSize: '3rem', mb: '5rem' }}>
              REGISTRY
            </Typography>
          </ThemeProvider>
          
          <ThemeProvider theme={contentTheme}>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
            <Typography sx={{ fontSize: '2rem' }}>
              <AirplanemodeActiveIcon sx={{ marginRight: '5px' }} />
              Honeymoon Fund
              <AirplanemodeActiveIcon sx={{ marginLeft: '5px' }} />
            </Typography>
            <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
            <Typography sx={{ fontSize: '1.25rem', marginBottom: '50px' }}>
              We do not have a traditional registry set up, but if you would like to contribute towards our honeymoon, we'd be so grateful!
              <br></br>
              <br></br>
              If you'd like to contribute, feel free to either bring cash to the wedding itself, venmo us at @David-Williams-53 or @Amanda-Wong-9, or via <a href="https://paypal.me/davidamandahoneymoon" target="_blank">this paypal link</a>.
            </Typography>
          </ThemeProvider>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}