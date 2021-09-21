import React from 'react';

function ThirdStep({ props: { handleValue, state }, fields }) {
  return (
    <div>
      {fields.slice(8, 13).map((field) => (
        <div key={field.id}>
          <label htmlFor={field.value}>{field.label}</label>
          <input
            type={field.type}
            id={field.value}
            name={field.value}
            value={state[field.value]}
            onChange={handleValue}
            required
          />

        </div>
      ))}
      <button type="submit">Criar guitarra</button>
    </div>
  );
}

export default ThirdStep;
