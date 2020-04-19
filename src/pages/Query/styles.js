import styled from 'styled-components/native';

import LogoQuery from '../../assets/query.png'

import { colors, metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin * 3.5};
`;

export const Logo = styled.Image.attrs({
    source: LogoQuery,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.25};
    align-self: center;
`;

