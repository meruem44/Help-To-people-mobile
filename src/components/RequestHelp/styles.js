import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
`;

export const Title = styled.Text`
   font-size: 14px;
   text-align: center;
   color:${colors.fontColor};
   font-weight: bold;
`;

export const FloatBack = styled.TouchableOpacity`
   position: absolute;
   top: 5%;
   left: 10%;
`;

