import React, { useState, useEffect } from 'react';
import fields from '../../service/formFields';

function FormSteps({
  props: {
    handleValue, state, step,
  }, error,
}) {
  const handleFields = () => {
    let newFields = [];
    if (step === 1) {
      newFields = fields.slice(0, 4);
    } else if (step === 2) {
      newFields = fields.slice(4, 8);
    } else {
      newFields = fields.slice(8, 13);
    }
    return newFields;
  };

  return (
    <>
      {handleFields().map((field) => (
        <div key={field.id}>
          {/* <label htmlFor={field.value}>{field.label}</label> */}
          <input
            className="pass-valid step-input"
            placeholder={field.label}
            type={field.type}
            id={field.value}
            name={field.value}
            value={state[field.value]}
            onChange={handleValue}
            required
          />
        </div>
      ))}
      {step === 3 && (
      <div className="create-guitar__container">
        <button type="submit">Criar Guitarra</button>
      </div>
      )}
    </>
  );
}

export default FormSteps;
