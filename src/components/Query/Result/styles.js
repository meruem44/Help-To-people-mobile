import styled, {css } from 'styled-components/native';

import { metrics, colors } from '../../../styles';
import LogoResult from '../../../assets/result.png';

const Down = css`
    color: ${colors.primary};
`;

const Media = css`
    color: ${colors.yellow};
`;

const Up = css`
    color: ${colors.red};
`;

export const Container = styled.View`
    flex: 1;
`;

export const Logo = styled.Image.attrs({
    source: LogoResult,
})`
    
    height: ${metrics.height * 0.25};
    align-self: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    width: ${metrics.width * 0.7};
    text-align: center;
    align-self: center;
    font-weight: bold;
    ${props => props.result === 0 && Down};
    ${props => props.result === 1 && Media};
    ${props => props.result === 2 && Up};
    margin-bottom: ${metrics.baseMargin};
`;


export const Span = styled.Text`
    margin-top: ${metrics.baseMargin};
    font-size: 18px;
    width: ${metrics.width * 0.7};
    text-align: center;
    align-self: center;
    font-weight: bold;
    color: ${colors.fontColor};
`;


