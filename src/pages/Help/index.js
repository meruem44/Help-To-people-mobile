import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import api from '../../services/api';
import Icon from '@expo/vector-icons/MaterialIcons'

import { Container, Logo, Load, FloatButton } from './styles';
import { Title } from '../../components/Texts';
import AddHelp from '../../components/RequestHelp';

import Item from '../../components/Request';
import { colors } from '../../styles';

export default function Help() {
  const user = useSelector(state => state.user);

  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    loadHelp();
  }, []);

  const loadHelp = async () => {
    setLoad(true);
    api.get('/showRequest', {
      params: {
        user_id: user._id
      }
    }).then(response => {
      setData(response.data);
      setLoad(false);
    }).catch(err => {
      console.log(err);
      setLoad(false);
    });
  };

  const handleAddRequest = index => {
    setAdd(index);
  }

  const handleAdd = () => {
    setLoad(true);

    const data = {
      user_id: user._id,
      title,
      description
    }

    api.post('/request', {
      ...data
    }).then(response => {
      console.log(response.data);
      setAdd(false);
      setDescription('');
      setTitle('');

      loadHelp();
      setLoad(false);
    }).catch(err => {
      console.log(err);
      setLoad(false);
    });
  }

  return (
    <Container>

      {!load && !add && (
        <Container>
          <Title text="Meus pedidos de ajuda." />

          <Logo />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                description={item.description}
                date={item.createdAt}
              />
            )}
          />

          <FloatButton onPress={() => handleAddRequest(true)}>
            <Icon
              name="add-circle"
              color={colors.primary}
              size={70}
            />
          </FloatButton>
        </Container>
      )}

      {add && (
        <AddHelp 
        load={load}
        back={handleAddRequest}
        title={title}
        onChangeTitle={setTitle}
        description={description}
        onChangeDescription={setDescription}
        add={handleAdd} />
      )}

      {load && (
        <Load />
      )}

    </Container>
  );
}
