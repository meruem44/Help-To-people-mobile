import styled from 'styled-components/native';

import { metrics, colors } from '../../styles';
import LoboBeware from '../../assets/precavir.png';

export const Container = styled.View`
    flex: 1;
    background: ${colors.white};
    padding-top: ${metrics.baseMargin * 2};
`;

export const Content = styled.ScrollView`
    
    padding-top: ${metrics.height * 0.1};
    flex-direction: row;
    margin-left: ${metrics.width * 0.02};
    margin-right: ${metrics.width * 0.02};
`;

export const Logo = styled.Image.attrs({
    source: LoboBeware,
    resizeMode: "contain"
})`
    height: ${metrics.height * 0.3};
    align-self: center;
`;