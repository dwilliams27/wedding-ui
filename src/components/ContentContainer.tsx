import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Stack, Typography } from '@mui/material';

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
      <Stack
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            // (0.852 1.173)
            width: { xs: 800, sm: 1200 },
            height: { xs: 938, sm: 1408 },
            paddingTop: { xs: '600px', md: '700px' },
            backgroundSize: '100% 100%',
            backgroundImage: { xs: 'url(/assets/bg_1_cropped_dim.jpg)' },
          }}
        >
            <Typography
              variant="h6"
              component="a"
              sx={{
                fontFamily: 'TheSeasons',
                fontWeight: 500,
                fontSize: { xs: '64px', sm: '64px' },
                fontStyle: 'italic',
                lineHeight: 1,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              David & <br />
              Amanda
            </Typography>
            <br />
            <Typography
              variant="h6"
              component="a"
              sx={{
                fontFamily: 'TheSeasons',
                fontWeight: 500,
                fontSize: { xs: '20px', sm: '32px' },
                fontStyle: 'italic',
                lineHeight: 1,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              May 26, 2024 | Somerset, VA
            </Typography>
        </Box>
        <div>
          <img src="/assets/bg_1.jpg" alt="temp crudely drawn pic" width="500" />
        </div>
        <div>
          <img src="/assets/bg_1.jpg" alt="temp crudely drawn pic" width="500" />
        </div>
      </Stack>
      {props.children}
    </Container>
  );
}