import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';

import LogoAjudar from '../../assets/ajudar.png';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
`;

export const Logo = styled.Image.attrs({
    source: LogoAjudar,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.25};
    align-self: center;
`;

export const Load = styled.ActivityIndicator.attrs({
    size: "large",
    animating: true
})`
   color: ${colors.primary};
`;

export const FloatButton = styled.TouchableOpacity`
    position: absolute;
    top: 85%;
    left: 80%;
`;

