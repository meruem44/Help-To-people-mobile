import styled from 'styled-components/native';

import { colors, metrics } from '../../../styles';

export const Title = styled.Text`
    font-size: 18px;
    line-height: 20px;
    align-self: center;
    font-weight: bold;
    color: ${colors.red};
    margin-bottom: ${metrics.baseMargin};
    width: ${metrics.width * 0.65};
    text-align: center;
`;