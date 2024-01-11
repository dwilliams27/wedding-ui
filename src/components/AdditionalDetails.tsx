import React from "react";
import TopBar from "./TopBar";
import { Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme, Box, Link } from "@mui/material";
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
            <Box sx={{ textAlign: 'center', fontSize: '1.25rem' }}>
              <Typography sx={{ fontSize: '1.25rem' }}>
                Formal invitations will be sent out for RSVPs.
                You can book a room in one of our hotel blocks at:
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.omnihotels.com/hotels/charlottesville/weddings/amanda-wong-anddavid-williams-wrb-05252024" sx={{ mx: 1 }}>Omni Hotel Charlottesville</Link>
                  <Link target="_blank" rel="noopener noreferrer" href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CHODNHT&groupCode=CHTWWW&arrivaldate=2024-05-24&departuredate=2024-05-27&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" sx={{ mx: 1 }}>Home2 Suites Charlottesville</Link>
                </Box>
                Transportation from the hotels to the venue will be provided.
              </Typography>
            </Box>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}