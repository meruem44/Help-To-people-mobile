import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, Load, Logo, FloatButton } from './styles';
import { Title } from '../../components/Texts';
import Item from '../../components/Request';

import api from '../../services/api';

import Icon from '@expo/vector-icons/MaterialIcons';
import { colors } from '../../styles';

export default function ListRequest(props) {
    const [load, setLoad] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadRequest();
    },[]);

    const loadRequest = () => {
        setLoad(true);

        api.get('/showRequest',{
            params: {
                user_id: props.data._id
            }
        }).then(response => {
            setData(response.data);
            setLoad(false);
        }).catch(err => {
            console.log(err);
            setLoad(false);
        });
    }

    return (
        <Container>
            <FloatButton onPress={() => props.back()}>
                <Icon 
                    name="keyboard-arrow-left"
                    color={colors.fontColor}
                    size={40}
                />
            </FloatButton>

            {!load && (
                <Container>
                    <Title text={`Pedidos de ajuda do ${props.data.name}`} />
                    <Logo />

                    <FlatList
                        data={data}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <Item
                            title={item.title}
                            description={item.title}
                            date={item.createdAt}
                            />
                        )}
                    />
                </Container>
            )}

            {load && <Load />}
        </Container>
    );
}
