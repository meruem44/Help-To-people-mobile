import React, { useState } from 'react';

import { Container, Progress, Form } from './styles';
import Question from './questions';
import Result from './Result';
import { colors } from '../../styles';

const questions = [
  'Tem febre?',
  'Tem dor de cabeça?',
  'Tem secreção nasal ou espirros?',
  'Tem dor/irritação de garganta?',
  'Tem tosse seca?',
  'Tem dificuldade respiratória?',
  'Tem dores no corpo?',
  'Tem diarreia?',
  'Viajou nos últimos 14 dias para algum local com casos confirmados de COVID-19?',
  'Esteve em contacto, nos últimos 14 dias, com um caso diagnosticado com COVID-19?',
]

export default function Query(props) {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);
  const [viewResult, setviewResult] = useState(false);

  const handleQuestion = index => {

    if (page + 1 === 10) {
      setviewResult(true);
      return;
    }

    if (index) {

      if (page === 0) {
        setResult(result + 5)
        setPage(page + 1);
        return;
      }
      if (page === 1 || page === 2 || page === 3
        || page === 6 || page === 7
      ) {
        setResult(result + 1);
        setPage(page + 1);
        return;
      }

      if (page === 8 || page === 4) {
        setResult(result + 3);
        setPage(page + 1);
        return;
      }

      if (page === 9 || page === 5) {
        setResult(result + 10);
        setPage(page + 1);
        return;
      }
    }

    setPage(page + 1);

  }

  const Reset = () => {
    setResult(0);
    setviewResult(false);
    props.reset();
  }

  return (
    <Container>

      {!viewResult && (
        <>
          <Progress page={page === 0 ? '0.5' : '0.' + page} />
          <Form>
            <Question
              onPress={handleQuestion}
              text={questions[page]} />
          </Form>
        </>
      )}

      {viewResult && (
        <Result reset={Reset} result={result} />
      )}

    </Container>
  );
}
