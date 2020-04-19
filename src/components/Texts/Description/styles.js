import styled from 'styled-components/native';

import { colors, metrics } from '../../../styles';

export const Title = styled.Text`
    font-size: 14px;
    line-height: 16px;
    align-self: center;
    font-weight: bold;
    color: ${colors.grayMinimal};
    margin-bottom: ${metrics.baseMargin};
    width: ${metrics.width * 0.65};
    text-align: center;
`;