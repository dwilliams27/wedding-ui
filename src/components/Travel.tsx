import React from "react";
import TopBar from "./TopBar";
import { Box, Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme, List, ListItem, ListItemText, ListItemAvatar, Grid, Avatar, Link } from "@mui/material";
import { Fonts } from "../utils/Fonts";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import { COLOR_GREEN } from "../models/models";

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
          <Box
            component="img"
            sx={{
              marginTop: { xs: '-20rem', sm: '-5rem' },
              minWidth: { xs: '100vw', sm: '40vw' },
              maxHeight: { sm: '60vw'},
            }}
            alt="travel."
            src="/assets/travel.jpeg"
          />
          <ThemeProvider theme={theme}>
            <Typography sx={{ marginTop: { xs: '-40.5rem', sm: '-20rem', lg: '-40rem' }, marginBottom: { xs: '36.5rem', sm: '20rem', lg: '32rem' }, fontSize: { xs: '40px', lg: '80px' }, color: '#05200a', zIndex: 1 }}>
              TRAVEL
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Typography sx={{ fontSize: '1.25rem' }}>
              We recommend flying into:
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: COLOR_GREEN }}>
                      <AirplanemodeActiveIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText sx={{ marginLeft: '3.5rem' }} primary="Charlottesville (CHO)"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Grid container spacing={4}>
                      <Grid item xs={4}>
                        <Avatar sx={{ backgroundColor: COLOR_GREEN }}>
                          <AirplanemodeActiveIcon />
                        </Avatar>
                      </Grid>
                      <Grid item xs={4}>
                        <Avatar sx={{ backgroundColor: COLOR_GREEN }}>
                          <DirectionsCarFilledOutlinedIcon />
                        </Avatar>
                      </Grid>
                    </Grid>
                  </ListItemAvatar>
                  <ListItemText primary="Richmond (RIC): ~1 Hour Drive" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemAvatar>
                    <Grid container spacing={4}>
                      <Grid item xs={4}>
                        <Avatar sx={{ backgroundColor: COLOR_GREEN}}>
                          <AirplanemodeActiveIcon />
                        </Avatar>
                      </Grid>
                      <Grid item xs={4}>
                        <Avatar sx={{ backgroundColor: COLOR_GREEN}}>
                          <DirectionsCarFilledOutlinedIcon />
                        </Avatar>
                      </Grid>
                    </Grid>
                  </ListItemAvatar>
                  <ListItemText primary="Washington DC (IAD or DCA): ~2/2.5 Hour Drive" />
                </ListItem>
              </List>
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>

          <ThemeProvider theme={theme}>
            <Typography sx={{ marginTop: '4.5rem', color: '#05200a', zIndex: 1 }}>
              ACCOMMODATIONS
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Box sx={{ textAlign: 'center', fontSize: '1.25rem' }}>
              <Typography sx={{ fontSize: '1.25rem' }}>
                You can book a room in one of our hotel blocks at:
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.omnihotels.com/hotels/charlottesville/weddings/amanda-wong-anddavid-williams-wrb-05252024" sx={{ mx: 1 }}>Omni Hotel Charlottesville</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=CHODNHT&groupCode=CHTWWW&arrivaldate=2024-05-24&departuredate=2024-05-27&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" sx={{ mx: 1 }}>Home2 Suites Charlottesville</Link>
              </Box>
              <Typography sx={{ fontSize: '1.25rem' }}>
                Transportation from the hotels to the venue will be provided.
              </Typography>
            </Box>
          </ThemeProvider>
          <Box sx={{ marginBottom: '10rem' }}></Box>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}