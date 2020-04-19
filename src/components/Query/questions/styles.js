import styled from 'styled-components/native';

import { metrics, colors } from '../../../styles';
import LogoQuestion from '../../../assets/question.png';

export const Container = styled.View`
    flex: 1;
`;

export const LogoQuest = styled.Image.attrs({
    source: LogoQuestion,
})`
    margin-top: ${metrics.baseMargin * 3};
    height: ${metrics.height * 0.25};
    align-self: center;
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    width: ${metrics.width * 0.4};
    background-color: ${colors.primary};
    height: ${metrics.height * 0.045};
    justify-content: center;
    border-radius: ${metrics.width * 0.4 /2};
    margin-top: ${metrics.baseMargin};
    margin-bottom: ${metrics.baseMargin};
`;

export const TextButton = styled.Text`
    font-size: 14px;
    align-self: center;
    font-weight: bold;
    color: ${colors.white};
`;