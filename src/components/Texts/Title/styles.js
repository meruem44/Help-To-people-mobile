import styled from 'styled-components/native';

import { colors, metrics } from '../../../styles';

export const Title = styled.Text`
    font-size: 24px;
    line-height: 27px;
    align-self: center;
    font-weight: bold;
    width: ${metrics.width * 0.8};
    color: ${colors.fontColor};
    text-align: center;
    margin-top: ${metrics.baseMargin};
    margin-bottom: ${metrics.baseMargin};
`;