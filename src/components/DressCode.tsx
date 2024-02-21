import React from "react";
import TopBar from "./TopBar";
import { Stack, fontWeight } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme, Box, Link } from "@mui/material";
import { Fonts } from "../utils/Fonts";
import { DARK_GREEN } from "../models/models";

export default function DressCode() {
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
            <Typography sx={{ marginTop: '100px', fontSize: '3rem', mb: '5rem' }}>
              Dress Code
            </Typography>
          </ThemeProvider>
          <Box
            // 0.847
            component="img"
            sx={{
              width: { xs: '396px', lg: '792px' },
              height: { xs: '467px', lg: '934px' },
            }}
            alt="Garden Party"
            src="/assets/garden_party.png"
          />
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '2rem', mb: '1rem' }}>
              Wedding Day Dress Code
            </Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>
              In the spirit of the celebration, we invite you to wear 
              <span style={{fontWeight: 'bold', fontStyle: 'italic', color: DARK_GREEN}}> Garden Party Formal </span>
              attire. For women, we suggest mid to floor length dresses -florals are encouraged but not required! For men, we suggest suits or tuxedos (if you’d like to go all out!) Ties are optional. Please see mood board above and reference pics below.
              <br></br><span style={{textDecoration: 'underline'}}> For all guests, we ask that you avoid cream or white attire! </span>
            </Typography>
          </ThemeProvider>
          <Box
            // 1.092
            component="img"
            sx={{
              width: { xs: '396px', lg: '792px' },
              height: { xs: '432px', lg: '865px' },
              mt: '1rem'
            }}
            alt="Garden Party"
            src="/assets/dress_code.png"
          />
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '1.25rem' }}>
              The wedding party will be wearing tuxedos and sage green satin dresses.
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}