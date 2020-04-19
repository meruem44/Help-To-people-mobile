import React from 'react';

import { Container } from './styles';
import { Title, Desc } from './styles';

export default function Request(props) {

  const handleFormated = () => {
    let date = new Date();

    let day = date.getDate();
    let ano = date.getFullYear();
    let mes = date.getMonth();

    let addMes = mes + 1;

    let formatedMes = String(addMes).length === 1 ? `0${addMes}` : addMes;
    let formatedDay = String(day).length === 1 ? `0${day}` : day;

    return `${formatedDay}/${formatedMes}/${ano}`;

  }

  return (
   <Container>
     <Title>{props.title}</Title>
     <Desc numberOfLines={2}>{props.description}</Desc>
     <Desc numberOfLines={2} >Data do pedido: {handleFormated(props.date)}</Desc>
   </Container>
  );
}
