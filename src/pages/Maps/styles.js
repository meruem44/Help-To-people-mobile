import styled from 'styled-components/native';

import heartIcon from '../../assets/heart.png';

import { metrics, colors } from '../../styles';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    color: ${colors.fontColor};
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    align-self: center;
`;

export const Desc = styled.Text`
    color: ${colors.grayMinimal};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    align-self: center;
`;

export const Load = styled.ActivityIndicator.attrs({
    size: "large",
    animating: true
})`
   color: ${colors.primary};
`;

export const Icone = styled.Image.attrs({
    source: heartIcon
})`
    width: ${metrics.width * 0.2}
`;

export const FloatButton = styled.TouchableOpacity`
    position: absolute;
    top: 3%;
    z-index: 10;
    left: 5%;
`;
