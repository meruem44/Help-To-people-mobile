import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Logo, Load } from './styles';
import { Title, Description } from '../../components/Texts';

export default function Home() {
  const user = useSelector(state => state.user);

  const [load, setLoad] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    setName(user.name);
    setLoad(false);
  }, []);

  return (
    <Container>
      {!load && (
        <>
          <Title text={`Bem vindo ${name}`}/>
          <Logo />
          <Description text="Aqui você pode ajudar, ser ajudado e ficar por dentro de tudo que acontece. Juntos podemos vencer essa crise." />
        </>
      )}

      {load && <Load />}
    </Container>
  );
}
