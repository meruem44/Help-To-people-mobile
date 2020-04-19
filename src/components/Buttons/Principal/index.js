import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Button, TextButton } from './styles';
import { colors } from '../../../styles';

export default function ButtonPrincipal(props) {
  return <Button onPress={() => props.onPress()}>
    {!props.load && (
      <TextButton>{props.textButton}</TextButton>
    )}

    {props.load && (
      <ActivityIndicator 
        size="large"
        color={colors.white}
        animating={props.load}
      />
    )}
  </Button>
}
