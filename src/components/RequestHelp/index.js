import React from 'react';

import { Container, FloatBack } from './styles';
import { Title } from '../Texts';
import { Input, InputMultLine } from '../Inputs';
import { ButtonPrincipal } from '../Buttons';

import Icon from '@expo/vector-icons/MaterialIcons';
import { colors } from '../../styles';

export default function RequestHelp(props) {
  return (
    <Container>

      <FloatBack onPress={() => props.back(false)}>
        <Icon
          name="keyboard-arrow-left"
          size={40}
          color={colors.fontColor}
        />
      </FloatBack>

      <Title text="Faça seu pedido de ajuda" />
      <Input
        place="Titulo"
        value={props.title}
        onChange={props.onChangeTitle}
      />

      <Title text="Diga uma descrição para o pedido" />
      <InputMultLine
        place="Descrição do pedido"
        value={props.description}
        onChange={props.onChangeDescription}
      />

      <ButtonPrincipal
        load={props.load}
        onPress={props.add}
        textButton="Fazer Pedido"
      />

    </Container>
  );
}
