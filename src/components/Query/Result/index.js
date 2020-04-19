import React, { useState, useEffect } from 'react';

import { Container, Title, Logo, Span } from './styles';
import { Description } from '../../../components/Texts';
import { ButtonPrincipal } from '../../../components/Buttons';

export default function Result(props) {
    const [load, setLoad] = useState(false);
    const [exame, setExame] = useState(2);

    useEffect(() => {
        if (props.result <= 9) {
            setExame(0);
            setLoad(false);
        }

        if (props.result >= 10 && props.result <= 19) {
            setExame(1);
            setLoad(false);
        }

        if (props.result >= 20 && props.result <= 36) {
            setExame(2);
            setLoad(false);
        }
    }, []);

    const handleText = () => {
        if (exame === 0) {
            return `O resultado do seu exame foi de ${props.result} pontos. O risco é baixo!`;
        }

        if (exame === 1) {
            return `O resultado do seu exame foi de ${props.result} pontos. O risco é medio!`;
        }
        return `O resultado do seu exame foi de ${props.result} pontos. O risco é Alto!`;

    }

    return (
        <Container>
            <Title result={exame}>{handleText()}</Title>
            <Description text="O resultado do exame não é 100% preciso. Serve apenas para te concientizar. Cause você tenha alguns desses sintomas, vá a um centro médico." />
            <Logo resizeMode="contain" />
            <Span>Veja na Aba "Precavir" como se proteger desse virus.</Span>
            <ButtonPrincipal 
            onPress={() => props.reset()}
            textButton="Refazer Exame" />
        </Container>
    );
}




