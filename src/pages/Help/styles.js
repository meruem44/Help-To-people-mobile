import styled from 'styled-components/native';

import LogoHelp from '../../assets/help.png'

import { colors, metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin};
`;

export const Logo = styled.Image.attrs({
    source: LogoHelp,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.25};
    align-self: center;
`;

export const Load = styled.ActivityIndicator.attrs({
    size:"large",
    animating:true
})`
   color: ${colors.primary};
`;

export const FloatButton = styled.TouchableOpacity`
    position: absolute;
    top: 85%;
    left: 80%;
`;



