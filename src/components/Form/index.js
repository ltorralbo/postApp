import React, { useState } from 'react';

import { Container, ValidationMessage } from './styles';

export default function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    let errors = {};

    if (name === '') {
      errors.name = 'Este campo es obligatorio';
    }
    if (description === '') {
      errors.description = 'Este campo es obligatorio';
    }

    if (name.length > 100) {
      errors.name = 'El nombre no debe superar los 100 caracteres';
    }

    if (description.length > 500) {
      errors.description = 'La descripción no debe superar los 500 caracteres';
    }

    return errors;
  };

  const handleSubmit = () => {
    let result = validate();

    setErrors(result);

    if (!Object.keys(result).length) {
      //send data to db
    }
  };

  return (
    <>
      <Container>
        <ValidationMessage>
          <div>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label>{errors.name && <p>{errors.name}</p>}</label>
        </ValidationMessage>
        <ValidationMessage>
          <div>
            <textarea
              placeholder="Descripción"
              rows="1"
              cols="15"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <label>{errors.description && <p>{errors.description}</p>}</label>
        </ValidationMessage>
        <button type="button" onClick={handleSubmit}>
          Crear
        </button>
      </Container>
    </>
  );
}
