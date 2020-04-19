import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

import { Container, Logo, Content } from './styles';
import { Title, Description, ErroText } from '../../components/Texts';
import { ButtonPrincipal, Outline } from '../../components/Buttons';
import { Input } from '../../components/Inputs';
import { set } from 'react-native-reanimated';

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    setError(false);
    navigation.navigate('Register');
  }

  const HandleLogin = () => {
    setError(false);
    setLoad(true);

    const data = {
      email,
      password
    }

    api.post('/session',{
      ...data
    }).then(response => {
      console.log(response);
     
      dispatch({
        type: 'LOG_USER',
        user: {...response.data}
      });

      setError(false);
      setLoad(false);
      navigation.navigate('Home');
    }).catch(err => {
      setLoad(false);
      setError(true);
      console.log(err);
    });

    
  }

  return (
    <Container>
      <Logo up={login} />
      <Title text="Help To Peoples" />

      {!login && (
        <>
          <Description
            text="Quem ajuda o próximo não está apenas ajudando uma pessoa; está construindo um mundo melhor."
          />

          <Content>
            <ButtonPrincipal
              onPress={() => setLogin(true)}
              textButton="Entrar"
            />

            <Outline
              onPress={handleRegister}
              textButton="Criar conta"
            />
          </Content>
        </>
      )}

      {login && (
        <>
          <Input
            place="Email"
            value={email}
            onChange={setEmail}
          />
          <Input
            place="Senha"
            value={password}
            onChange={setPassword}
          />

          {error && <ErroText text="Erro ao logar, tente novamente." />}

          <ButtonPrincipal
            load={load}
            onPress={HandleLogin}
            textButton="Entrar"
          />
        </>
      )}

    </Container>
  );
}
