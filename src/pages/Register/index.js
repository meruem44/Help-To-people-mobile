import React, { useEffect, useState } from 'react';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import api from '../../services/api';

import { Container, Logo } from './styled';
import { ButtonPrincipal } from '../../components/Buttons';
import { Title, ErroText } from '../../components/Texts';
import { Input } from '../../components/Inputs';

export default function Register({ navigation }) {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [email, setemail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    const loadPosition = async () => {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setLatitude(latitude);
        setLongitude(longitude);
      }
    };

    loadPosition();
  },[]);

  const handleRegister = () => {
    setLoad(true);

    const data = {
      name,
      password,
      email,
      age,
      city,
      state,
      latitude,
      longitude
    }

    console.log(data);

    api.post('/user',{
      ...data
    }).then(response => {
      console.log(response);
      setLoad(false);
      navigation.navigate('Initial');
    }).catch(err => {
      console.log(err);
      setError(true);
      setLoad(false);

    });
  }

  return (
    <Container>
      <Logo />

      <Title text="Preencha os dados para se cadastrar." />

      <Input
        place="Seu nome"
        value={name}
        onChange={setName}
      />

      <Input
        place="Seu E-mail"
        value={email}
        onChange={setemail}
      />

      <Input
        place="Sua idade"
        value={age}
        onChange={setAge}
        max={2}
        type={'number-pad'}
      />

      <Input
        place="Sua senha"
        value={password}
        onChange={setPassword}
      />

      <Input
        place="Nome da sua cidade"
        value={city}
        onChange={setCity}
      />

      <Input
        place="Sigla do seu estado"
        value={state}
        onChange={setState}
        max={2}
      />

    {error && <ErroText text="Aconteceu um erro ao fazer o cadastro, verifique as informações e tente novamente." />}

    <ButtonPrincipal 
      onPress={handleRegister}
      textButton="Cadastrar"
      load={load}
    />
    </Container>
  );
}
