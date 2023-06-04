import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import BeVietnam from '../fonts/BeVietnamPro-Regular.ttf';

interface Props {
  children: React.ReactElement;
}

export default function ContentContainer(props: Props) {
  let theme = createTheme({
    typography: {
      fontFamily: 'BeVietnam',
      button: {
        textTransform: 'none'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'BeVietnam';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('BeVietnam'), local('BeVietnam-Regular'), url(${BeVietnam}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });
  theme = responsiveFontSizes(theme);
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
            width: { xs: 700, sm: 1200 },
            height: { xs: 821, sm: 1408 },
            paddingTop: { xs: '600px', sm: '900px' },
            backgroundSize: '100% 100%',
            backgroundImage: { xs: 'url(/assets/bg_1_cropped_fade.jpg)' },
            marginBottom: '-1px'
          }}
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              fontFamily: 'TheSeasons',
              fontWeight: 500,
              fontSize: { xs: '64px', sm: '80px' },
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
        <Box
          sx={{
            // (0.852 1.173)
            width: { xs: 800, sm: 1200 },
            height: { xs: 1600 },
            backgroundColor: '#39422e',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Box
            component="img"
            sx={{
              opacity: 0.1,
              position: 'absolute',
              left: 0,
              top: '300px',
              width: '100%',
              height: 'auto'
            }}
            alt="David and amanda proposal."
            src="/assets/flower_bg.png"
          />
          <Stack sx={{ 
            alignItems: 'center',
            position: 'relative'
          }}>
            <Box
              // 1.044
              component="img"
              sx={{
                width: '350px',
                height: '365px',
              }}
              alt="David and amanda in black and white."
              src="/assets/bw_flower_frame.png"
            />
            <Typography
              variant="h6"
              component="a"
              sx={{
                fontFamily: 'TheSeasons',
                fontWeight: 500,
                fontSize: { xs: '64px' },
                fontStyle: 'italic',
                lineHeight: 1,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
                marginBottom: '20px'
              }}
            >
              Our Story
            </Typography>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  fontFamily: 'BeVietnam',
                  fontWeight: 500,
                  fontSize: { xs: '18px' },
                  width: '40%',
                  lineHeight: 1,
                  letterSpacing: '.15rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                David and Amanda met as most ~young~ couples do, a dating app (bonus points if you know which one!) 
                <br /><br />
                Their first date was in a small Korean restaurant in Georgetown, DC, filled with laughter and too much spicy pork bulgogi. 
                Despite starting off long distance, their love continued to grow, fostered by Facetime calls and Amtrak trips. 
                <br /><br />
                <Box
                  // 1.5
                  component="img"
                  sx={{
                    width: '225px',
                    height: '150px',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: '12px 8px 25px 8px',
                    marginTop: '12px',
                    marginBottom: '8px'
                  }}
                  alt="David and amanda proposal."
                  src="/assets/hal_pics.jpeg"
                />
                <br />
                After four years together, David proposed to Amanda amongst volcanic rock and clouds, marking the beginnings of a new chapter. 
                <br /><br />
                We are so excited to have you with us as we celebrate the start of our next adventure together!
              </Typography>
            </ThemeProvider>
            <Box
              // 1.5
              component="img"
              sx={{
                width: '225px',
                height: '150px',
                borderColor: 'white',
                borderStyle: 'solid',
                borderWidth: '12px 8px 25px 8px',
                marginTop: '16px'
              }}
              alt="David and amanda in boldrock."
              src="/assets/dav_am_br.jpg"
            />
            <Box
              // 1.5
              component="img"
              sx={{
                width: '150px',
                height: '200px',
                borderColor: 'white',
                borderStyle: 'solid',
                borderWidth: '12px 8px 40px 8px',
                marginTop: '16px'
              }}
              alt="David and amanda proposal."
              src="/assets/kl_crop.jpeg"
            />
          </Stack>
        </Box>
        <div>
          <img src="/assets/holding_hands.png" alt="temp crudely drawn pic" width="500" />
        </div>
      </Stack>
      {props.children}
    </Container>
  );
}