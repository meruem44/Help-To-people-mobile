import React from 'react';

import { Container, Logo, Content } from './styles';
import { Title, Description } from '../../components/Texts';

import Tip from '../../components/Tips';

export default function Home() {
  return (
    <Container>
      <Title text="Dicas para combater o COVID-19" />
      <Logo />

      <Content horizontal showsHorizontalScrollIndicator={false}>
        <Tip title="Lavar bem as mãos"
          desc="A lavagem frequente das mãos é a principal recomendação para se prevenir"
        />
        <Tip title="Evitar tocar olhos, boca e nariz"
          desc="Contato com olhos, nariz ou boca permite que o vírus entre no corpo."
        />
        <Tip
          title="Cuidados em ambientes com aglomeração de pessoas"
          desc="Mantenha-se a pelo menos um metro de distância de pessoas."
        />
        <Tip title="Álcool gel e máscaras"
          desc="O uso de álcool gel é uma medida eficaz para higienização das mãos."
        />
      </Content>
    </Container>
  );
}
