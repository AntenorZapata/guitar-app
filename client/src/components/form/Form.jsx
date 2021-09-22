import React, { useState, useEffect } from 'react';
import fields from '../../service/formFields';
import FormSteps from './FormSteps';

export default function Form(props) {
  const { handleSubmit, step, setStep } = props;
  const [error, setError] = useState('');

  const handleFormSteps = ({ target: { name } }) => {
    if (name === 'back') {
      setStep((prev) => prev - 1);
    }
    if (name === 'next') {
      if (step === 3) {
        setStep(1);
      } else {
        setStep((prev) => prev + 1);
      }
    }
    setError('');
  };

  const handleInputValidation = ({ target: { value } }, label) => {
    if (!value) {
      setError(label);
    }
  };

  return (
    <div className="form-container">
      <button type="button" onClick={() => setStep(1)}>1</button>
      <button type="button" onClick={() => setStep(2)}>2</button>
      <button type="button" onClick={() => setStep(3)}>3</button>
      <form className="form" onSubmit={handleSubmit}>
        <FormSteps
          props={props}
          handleInputValidation={handleInputValidation}
          error={error}
        />
        <button
          type="button"
          onClick={handleFormSteps}
          className="form-step-button"
          name="next"
          disabled={step === 3}
        >
          próximo
        </button>
        {step > 1 && (
        <button
          type="button"
          name="back"
          onClick={handleFormSteps}
          className="form-step-button"
        >
          voltar
        </button>
        )}
      </form>
    </div>
  );
}
