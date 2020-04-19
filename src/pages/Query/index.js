import React, { useState } from 'react';

import { Container, Logo } from './styles';
import { Title, Description } from '../../components/Texts';
import { ButtonPrincipal } from '../../components/Buttons';
import Consult from '../../components/Query';

export default function Query() {
  const [query, setQuery] = useState(false);

  const startQuery = () => {
    setQuery(true);
  }

  const Reset = () => {
    setQuery(false);
  }

  return (
    <Container>
      {!query && (
        <>
          <Logo />
          <Title text="Está com dúvidas sobre o covid-19? Faça uma consulta online." />
          <Description text="Essa consulta não substitui a visita ao medico, se algum sintoma persistir vá a um centro medico." />
          <ButtonPrincipal onPress={startQuery} textButton="Iniciar consulta" />
        </>
      )}

      {query && (
        <Consult reset={Reset} />
      )}

    </Container>
  );
}
