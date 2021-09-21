import React from 'react';

function FormSteps({
  props: {
    handleValue, state, handleInput, step,
  }, fields,
}) {
  return (
    <div>
      {fields.map((field) => (
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
