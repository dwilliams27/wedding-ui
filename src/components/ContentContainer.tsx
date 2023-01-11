import * as React from 'react';
import Container from '@mui/material/Container';

interface Props {
  children: React.ReactElement;
}

export default function ContentContainer(props: Props) {
  const styles = {
    backgroundSize: '100% 100%',
    backgroundImage: 'url(/assets/background.png)',
    width: '100%',
    height: '100%'
  }
  return (
    <Container style={styles}>
      <img src="/assets/holding_hands.png" width="500" height="300" />
      {props.children}
    </Container>
  );
}