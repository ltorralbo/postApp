import React from 'react';
import { Container } from './styles';

import Filter from '../Filter';
import List from '../List';
import Form from '../Form';

export default function Card() {
  return (
    <Container>
      <Filter />
      <List />
      <Form />
    </Container>
  );
}
