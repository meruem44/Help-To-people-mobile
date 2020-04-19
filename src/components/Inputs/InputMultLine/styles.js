import styled from 'styled-components/native';

import { colors, metrics } from '../../../styles';

export const Container = styled.View`
    width: ${metrics.width * 0.7};
    height: ${metrics.height * 0.2};
    align-self: center;
    border-radius: 20px;
    margin-bottom: ${metrics.baseMargin};
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid ${colors.grayMinimal};
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.grayMinimal,
    multiline:true
})`
    flex:1;
    font-size: 16px;
    line-height: 28px;
    align-self: center;
    font-weight: bold;
    color: ${colors.fontColor};
`;

