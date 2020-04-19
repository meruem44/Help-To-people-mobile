import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, Load, Logo } from './styles';
import { Title } from '../../components/Texts';
import Item from '../../components/RequestPeople';

import Maps from '../Maps';

import api from '../../services/api';

export default function Ajudar(props) {
    const [load, setLoad] = useState(true);
    const [data, setData] = useState([]);
    const [dataMaps, setDataMaps] = useState({});
    const [view, setView] = useState(false);

    useEffect(() => {
        loadRequest();
    },[]);

    const loadRequest = () => {
        setLoad(true);

        api.get('/all').then(response => {
            setData(response.data);
            setLoad(false);
        }).catch(err => {
            console.log(err);
            setLoad(false);
        });
    }

    const handleViewRequest = data => {
        setDataMaps({...data})
        setView(true);
    }

    
  const back = () => {
    setView(false);
    loadRequest();
  }

    return (
        <Container>
            {!load && !view &&(
                <Container>
                    <Title text="Pessoas que estão precisando de ajuda." />
                    <Logo />

                    <FlatList
                        data={data}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                            <Item
                                viewInfo={handleViewRequest}
                                data={item}
                                name={item.name}
                                age={item.age}
                                city={item.city}
                                state={item.state}
                            />
                        )}
                    />
                </Container>
            )}

            {view && (
                <Maps 
                    back={back}
                    data={dataMaps}
                />
            )}

            {load && <Load />}
        </Container>
    );
}
