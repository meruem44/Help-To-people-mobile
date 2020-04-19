import React from 'react';

import {
    Container,
    Button,
    TextButton,
    Content,
    LogoQuest
} from './styles';

import { Title } from '../../Texts';

export default function questions(props) {
    return (
        <Container>
            <Title text={props.text} />

            <LogoQuest resizeMode="contain"/>

            <Content>
                <Button onPress={() => props.onPress()}>
                    <TextButton>Não</TextButton>
                </Button>

                <Button onPress={() => props.onPress(true)}>
                    <TextButton>Sim</TextButton>
                </Button>
            </Content>
        </Container>
    );
}
