import React from "react";
import TopBar from "./TopBar";
import { Stack } from "@mui/system";
import { Divider, Fade, Typography, ThemeProvider, createTheme, Box, Link, Grid, Card, CardContent, Container } from "@mui/material";
import { Fonts } from "../utils/Fonts";

interface Event { 
  title: string, 
  time: string, 
  description: string,
  address?: string
};

const satEvents: Event[] = [
  { title: 'Welcome Event at Boldrock Cidery', time: 'Saturday, 2:00 - 4:00pm', description: 'Join us at Boldrock Cidery for a few drinks!', address: '1435 Carters Mountain Trail, Charlottesville, VA 22902' },
];
const sunEvents: Event[] = [
  { title: 'Wedding Ceremony', time: '5:00 PM', description: 'Ceremony will be at the Market At Grelen.' },
  { title: 'Wedding Reception', time: '7:00 PM', description: 'Reception will follow after cocktail hour at the Market.' },
]

function genGridItemsForEvents(events: Event[]) {
  return (events.map((event, index) => (
    <Grid item xs={12} key={index}>
      <Card sx={{maxWidth: '20rem'}}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {event.title}
          </Typography>
          <Typography color="textSecondary">
            {event.time}
          </Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography variant="body2" component="p">
            {event.description}
          </Typography>
          <Typography variant="body2" component="p">
            {event.address}
          </Typography>
        </CardContent>
      </Card>
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
        <Container>
          <ThemeProvider theme={headerTheme}>
            <Typography sx={{ marginTop: '100px', fontSize: '3rem' }}>
              EVENTS
            </Typography>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px' }}/>
          <ThemeProvider theme={contentTheme}>
            <Grid container spacing={2} style={{ padding: 20 }} justifyContent="center">
              <Grid item xs={12}>
                <ThemeProvider theme={contentTheme}>
                  <Typography sx={{ fontSize: '2rem' }}>
                    Saturday
                  </Typography>
                </ThemeProvider>
              </Grid>
              {genGridItemsForEvents(satEvents)}
              <Grid item xs={12}>
                <ThemeProvider theme={contentTheme}>
                  <Typography sx={{ fontSize: '2rem' }}>
                    Sunday
                  </Typography>
                </ThemeProvider>
              </Grid>
              {genGridItemsForEvents(sunEvents)}
            </Grid>
          </ThemeProvider>
          <Divider flexItem sx={{ marginTop: '50px', marginBottom: '50px' }}/>
        </Container>
      </Fade>
    </React.Fragment>
  );
}