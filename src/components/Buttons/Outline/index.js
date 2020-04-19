import React from 'react';

import { Button, TextButton } from './styles';

export default function Outline(props) {
  return <Button onPress={() => props.onPress()}>
    <TextButton>{props.textButton}</TextButton>
  </Button>
}
