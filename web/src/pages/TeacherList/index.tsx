import React from 'react';

import PageHeader from '../../components/PageHeader';
import Container from '../../components/Container';

import TeacherItem from '../../components/TeacherItem';
import { Form, InputBlock, Main } from './styles';

const TeacherList: React.FC = () => (
  <Container>
    <PageHeader title="Estes sãos os proffys disponíveis.">
      <Form>
        <InputBlock>
          <label htmlFor="subject">Matéria</label>
          <input id="subject" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="week-day">Dia da semana</label>
          <input id="week-day" />
        </InputBlock>

        <InputBlock>
          <label htmlFor="time">Hora</label>
          <input id="time" />
        </InputBlock>
      </Form>
    </PageHeader>

    <Main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </Main>
  </Container>
);

export default TeacherList;
