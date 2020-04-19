import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';
import LogoHome from '../../assets/home.png';

export const Container = styled.View`
    flex: 1;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin * 2};
    justify-content: center;
`;

export const Logo = styled.Image.attrs({
    source: LogoHome,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.3};
    align-self: center;
`;

export const Load = styled.ActivityIndicator.attrs({
    size:"large",
    animating:true
})`
   color: ${colors.primary};
`;