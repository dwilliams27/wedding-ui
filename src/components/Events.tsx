import React from "react";
import TopBar from "./TopBar";
import { Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme, Box, Link, Grid, Card, CardContent, Container, Paper, List, ListItem, ListItemText } from "@mui/material";
import { Fonts } from "../utils/Fonts";
import WineBarIcon from '@mui/icons-material/WineBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CelebrationIcon from '@mui/icons-material/Celebration';

interface Event { 
  title: string, 
  time: string, 
  description: string,
  address?: string,
  icon?: any,
};

const satEvents: Event[] = [
  { title: 'Welcome Event at Bold Rock Carter Mountain', icon: <WineBarIcon />, time: '2:00 - 4:00 pm', description: 'Join us at Bold Rock Carter Mountain cidery for drinks and apple cider donuts!', address: '1435 Carters Mountain Trail, Charlottesville, VA 22902' },
];
const sunEvents: Event[] = [
  { title: 'Wedding Ceremony', icon: <FavoriteBorderIcon />, time: '5:00 pm', description: 'Ceremony will be at the The Market at Grelen.', address: '15091 Yager Rd, Somerset, VA 22972' },
  { title: 'Wedding Reception', icon: <CelebrationIcon />, time: '7:00 pm', description: 'Reception will follow after cocktail hour at the Market.' },
]

function genGridItemsForDay(events: Event[]) {
  return (events.map((event, index) => (
    <Grid container justifyContent="space-between" sx={{ marginLeft: { xs: '1rem', md: '4rem' }, marginRight: { xs: '0.5rem', md: '2rem' } }}>
      <Grid item xs={2}>
        <Typography variant="body1" sx={{ textAlign: 'left', fontSize: { xs: '1rem', md: '1.5rem'} }}>
          {event.time}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Divider orientation="vertical" sx={{ width: '10px', height: '100%' }}/>
      </Grid>
      <Grid item xs={9} sx={{ marginBottom: '3rem' }}>
        <Typography variant="body1" sx={{ textAlign: 'left', fontSize: { xs: '1rem', md: '1.5rem'} }}>
          <strong>{event.title} </strong><span style={{ verticalAlign: 'middle' }}>{event.icon}</span>
          <br />
          <Container sx={{ fontSize: { xs: '0.85rem', md: '1.4rem'}, paddingLeft: '0 !important' }}>
            <a href={`https://www.google.com/maps/search/?api=1&query=${event.address}`} target="_blank" rel="noreferrer">
              {event.address}
            </a>
          </Container>
          <br />
          {event.description}
        </Typography>
      </Grid>
    </Grid>
  )));
}

export default function Events() {
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
            <Typography sx={{ fontSize: { xs: '40px', md: '60px', lg: '80px' }, mb: '2.5rem', mt: '5rem' }}>
              EVENTS
            </Typography>
          </ThemeProvider>
          <Divider sx={{ width: '100%', mb: '2.5rem' }}/>
          <Stack sx={{ }}>
            <ThemeProvider theme={headerTheme}>
              <Typography sx={{ textAlign: 'left', marginLeft: { xs: '0.5rem', md: '2rem' }, fontSize: { xs: '2rem', md: '3rem' }, marginBottom: '1rem' }}>
                Saturday
              </Typography>
              {genGridItemsForDay(satEvents)}
            </ThemeProvider>
            
            <ThemeProvider theme={headerTheme}>
              <Typography sx={{ textAlign: 'left', marginLeft: { xs: '0.5rem', md: '2rem' }, fontSize: { xs: '2rem', md: '3rem' }, marginBottom: '1rem' }}>
                Sunday
              </Typography>
              {genGridItemsForDay(sunEvents)}
            </ThemeProvider>
          </Stack>
        </Stack>
      </Fade>
    </React.Fragment>
  );
}