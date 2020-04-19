import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';

export const Container = styled.View`
    width: ${metrics.width * 0.4};
    height: ${metrics.height * 0.2};
    margin-right: 10px;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin};
    border: 1px solid ${colors.grayMinimal};
    border-radius: 10px;
`;

export const Title = styled.Text`
   font-size: 14px;
   text-align: center;
   width: ${metrics.width * 0.35};
   align-self: center;
   color:${colors.fontColor};
   font-weight: bold;
`;

export const Desc = styled.Text`
   font-size: 12px;
   text-align: center;
   margin-top: ${metrics.baseMargin /2};
   width: ${metrics.width * 0.3};
   align-self: center;
   color:${colors.grayMinimal};
   font-weight: bold;
`;

