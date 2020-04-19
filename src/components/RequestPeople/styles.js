import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';

export const Container = styled.TouchableOpacity`
    background-color: ${colors.white};
    height: ${metrics.height * 0.15};
    border: 1px solid ${colors.primary};
    align-self: center;
    margin-bottom: ${metrics.baseMargin};
    width: ${metrics.width * 0.8};
    border-radius: 10px;
    padding-top: ${metrics.baseMargin};
`;

export const Title = styled.Text`
    color: ${colors.fontColor};
    font-size:16px;
    text-align: center;
    font-weight: bold;
`;

export const Desc = styled.Text`
    padding-top: ${metrics.baseMargin / 2};
    color: ${colors.grayMinimal};
    font-size:13px;
    text-align: center;
    font-weight: bold;
`;
