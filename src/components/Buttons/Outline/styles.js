import styled from 'styled-components/native';

import { colors, metrics } from '../../../styles';

export const Button = styled.TouchableOpacity`
    width: ${metrics.width * 0.7};
    background-color: ${colors.white};
    height: ${metrics.height * 0.055};
    align-self: center;
    justify-content: center;
    border-radius: ${metrics.width * 0.7 /2};
    margin-top: ${metrics.baseMargin};
    margin-bottom: ${metrics.baseMargin};
    border: 2px solid ${colors.fontColor};
`;

export const TextButton = styled.Text`
    font-size: 18px;
    align-self: center;
    font-weight: bold;
    color: ${colors.fontColor};
`;