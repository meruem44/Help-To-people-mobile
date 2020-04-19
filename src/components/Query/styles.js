import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';

export const Container = styled.View`
    flex: 1;
`;

export const Progress = styled.View`
    background: ${colors.primary};
    height: ${metrics.height * 0.02};
    margin-left:${metrics.width * 0.05};
    margin-right:${metrics.width * 0.05};
    border-radius: 20px;
    width: ${props => metrics.width * props.page};
`;

export const Form = styled.View`
    flex: 1;
    padding-top: ${metrics.baseMargin * 2};
`;

