import * as React from 'react';
import Container from '@mui/material/Container';

interface Props {
  children: React.ReactElement;
}

export default function ContentContainer(props: Props) {
  return (
    <Container sx={{
      backgroundSize: '100% 100%',
      backgroundImage: 'url(/assets/background.png)',
      width: '100%',
      height: '100%'
    }}>
      <img src="/assets/holding_hands.png" alt="temp crudely drawn pic" width="500" height="300" />
      {props.children}
    </Container>
  );
}