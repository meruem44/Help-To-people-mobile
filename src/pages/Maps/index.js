import React, { useEffect, useState } from 'react';

import Icon from '@expo/vector-icons/MaterialIcons';

import MapView, { Marker, Callout } from 'react-native-maps';
import { Container, Title, Desc, Load, Icone, FloatButton } from './styles';
import { metrics, colors } from '../../styles';

import ListRequest from '../ListRequest';

export default function Maps(props) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [load, setLoad] = useState(true);
  const [viewRequest, setviewRequest] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {

    const { location: { coordinates } } = props.data;

    console.log(props.data);

    setLatitude(coordinates[1]);
    setLongitude(coordinates[0]);

    setCurrentRegion({
      latitude: coordinates[1],
      longitude: coordinates[0],
      latitudeDelta: 0.04,
      longitudeDelta: 0.04
    });

    setLoad(false);
  }, []);

  const handleView = () => {
    setviewRequest(!viewRequest);
  }

  return (
    <Container>

      {!load && !viewRequest && (
        <Container>
          <FloatButton onPress={() => props.back()}>
            <Icon
              name="keyboard-arrow-left"
              color={colors.fontColor}
              size={40}
            />
          </FloatButton>

          {!load && (
            <MapView
              initialRegion={currentRegion}
              style={{ flex: 1 }}>

              <Marker 
              coordinate={
                {
                  latitude: latitude,
                  longitude: longitude
                }
              }>
                <Icone resizeMode="contain" />

                <Callout  onPress={handleView} style={{ width: metrics.width * 0.4, height: metrics.height * 0.12 }}>
                  <Title numberOfLines={2}>{props.data.name}</Title>
                  <Desc>Idade: {props.data.age}</Desc>
                  <Desc>Cidade: {props.data.city}</Desc>
                </Callout>

              </Marker>
            </MapView>
          )}
        </Container>
      )}

      {viewRequest && (
        <ListRequest 
          back={handleView}
          data={props.data}
        />
      )}

      {load && <Load />}
    </Container>
  )
}
