import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import LeftDrawer from './LeftDrawer';

interface ScrollProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ScrollProps) {
  const { children } = props;

  return React.cloneElement(children, {
    elevation: 0,
  });
}

export default function FloatingHeader() {
  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar sx={{
            paddingLeft: '2000px'
          }}>
            <LeftDrawer />
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}