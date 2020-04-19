import React from 'react';

import { Container } from './styles';
import { Title, Desc } from './styles';

export default function RequestPeople(props) {

  return (
   <Container 
   onPress={() => props.viewInfo(props.data)}
   activeOpacity={.6}>
     <Title>{props.name}</Title>
     <Desc numberOfLines={2}>Idade: {props.age}</Desc>
  <Desc numberOfLines={2} >Cidade: {props.city} - {String(props.state).toLocaleUpperCase()}</Desc>
   </Container>
  );
}
