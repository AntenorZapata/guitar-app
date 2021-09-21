import React from 'react';
import fields from '../../service/formFields';

function FormSteps({
  props: {
    handleValue, state, handleInput, step,
  },
}) {
  let newFields = [];
  if (step === 1) {
    newFields = fields.slice(0, 4);
  } else if (step === 2) {
    newFields = fields.slice(4, 8);
  } else {
    newFields = fields.slice(8, 13);
  }

  return (
    <div>
      {newFields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.value}>{field.label}</label>
          <input
            type={field.type}
            id={field.value}
            name={field.value}
            value={state[field.value]}
            onChange={handleValue}
            onBlur={(e) => handleInput(e)}
            required
          />
        </div>
      ))}
      {step === 3 && <button type="submit">Criar guitarra</button>}
    </div>
  );
}

export default FormSteps;
