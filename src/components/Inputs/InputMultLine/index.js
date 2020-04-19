import React from 'react';

import { Container, Input } from './styles';

export default function TextTitle(props) {
  return (
    <Container>
      <Input 
        placeholder={props.place}
        value={props.value}
        autoCapitalize="none"
        onChangeText={props.onChange}
        autoCorrect={false}
        keyboardType={props.type ? props.type : 'default' }
        maxLength={props.max ? props.max : 200}
      />
    </Container>
  )
}
