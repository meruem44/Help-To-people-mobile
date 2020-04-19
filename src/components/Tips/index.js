import React from 'react';
import { View } from 'react-native';

import { Container, Title, Desc } from './styles';

export default function Tips(props) {
  return (
    <Container>
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
    </Container>
  );
}
