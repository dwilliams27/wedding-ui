import * as React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

interface Props {
  children: React.ReactElement;
}

export default function ContentContainer(props: Props) {
  return (
    <Container sx={{
      backgroundSize: '100% 100%',
      backgroundImage: 'url(/assets/background.png)',
      width: '100%',
      height: '100%',
      paddingLeft: 0,
      paddingRight: 0
    }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <img src="/assets/bg_1.jpg" alt="temp crudely drawn pic" width="500" />
        </Grid>
        <Grid item xs={12}>
          <img src="/assets/bg_1.jpg" alt="temp crudely drawn pic" width="500" />
        </Grid>
        <Grid item xs={12}>
          <img src="/assets/bg_1.jpg" alt="temp crudely drawn pic" width="500" />
        </Grid>
      </Grid>
      {props.children}
    </Container>
  );
}