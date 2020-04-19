import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';

import LogoRegister from '../../assets/cadastrar.png';

export const Container = styled.ScrollView`
    flex: 1;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin };
    padding-bottom: ${metrics.baseMargin * 2}
`;

export const Logo = styled.Image.attrs({
    source:LogoRegister,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.18};
    align-self: center;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: ${metrics.height * 0.1}
`;
