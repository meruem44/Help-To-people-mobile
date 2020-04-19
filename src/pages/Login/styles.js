import styled, { css } from 'styled-components/native';

import { colors, metrics } from '../../styles';

import LogoInitial from '../../assets/login.png';

const LoginToUp = css`
    height: ${metrics.height * 0.22};
`;

export const Container = styled.View`
    flex: 1;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin * 5};
    justify-content: center;
`;

export const Logo = styled.Image.attrs({
    source:LogoInitial,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.3};
    ${props => props.up && LoginToUp}
    align-self: center;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: ${metrics.height * 0.1}
`;


