import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Container, Columns, Cell } from './styles';

export default function List() {
  return (
    <Container>
      <Columns>
        <h4>Nombre</h4>
        <h4>Descripción</h4>
        <h4>Acción</h4>
      </Columns>
      <Columns>
        <Cell>
          <p>Post 1</p>
        </Cell>
        <Cell>
          <p>Descripción</p>
        </Cell>
        <Cell>
          <p>
            <MdDelete size={18} color="#cfe0ed" />
          </p>
        </Cell>
      </Columns>
    </Container>
  );
}
