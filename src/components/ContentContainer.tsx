import * as React from 'react';
import Container from '@mui/material/Container';

interface Props {
  children: React.ReactElement;
}

export default function ContentContainer(props: Props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}