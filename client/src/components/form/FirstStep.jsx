import React from 'react';
// import fields from '../../service/formFields';

function FirstStep({ props: { handleValue, state }, fields }) {
  return (
    <div>
      {fields.slice(0, 4).map((field) => (
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

    </div>
  );
}

export default FirstStep;
