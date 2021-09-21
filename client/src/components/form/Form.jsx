import React, { useState, useEffect } from 'react';
import fields from '../../service/formFields';
import FormSteps from './FormSteps';

export default function Form(props) {
  const { handleSubmit, step, setStep } = props;

  const handleFormSteps = () => {
    if (step === 3) {
      setStep(1);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleInputValidation = (e) => {
    console.log(e);
  };

  return (
    <div className="form-container">
      <button type="button" onClick={() => setStep(1)}>1</button>
      <button type="button" onClick={() => setStep(2)}>2</button>
      <button type="button" onClick={() => setStep(3)}>3</button>
      <form className="form" onSubmit={handleSubmit}>
        {step === 1 && (
        <FormSteps
          props={props}
          fields={fields.slice(0, 4)}
          handleInput={handleInputValidation}
        />
        )}
        {step === 2 && (
        <FormSteps
          props={props}
          fields={fields.slice(4, 8)}
          handleInput={handleInputValidation}
        />
        )}
        {step === 3 && (
        <FormSteps
          props={props}
          fields={fields.slice(8, 13)}
          handleInput={handleInputValidation}
          step={step}
        />
        )}
        <button
          type="button"
          onClick={handleFormSteps}
          className="form-step-button"
        >
          {step === 3 ? 'voltar' : 'próximo'}
        </button>
      </form>
    </div>
  );
}
