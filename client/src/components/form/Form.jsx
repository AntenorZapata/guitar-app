import React, { useState, useEffect } from 'react';
import fields from '../../service/formFields';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

export default function Form(props) {
  const { handleSubmit, step, setStep } = props;

  const handleFormSteps = () => {
    if (step === 3) {
      setStep(1);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="form-container">
      <button type="button" onClick={() => setStep(1)}>1</button>
      <button type="button" onClick={() => setStep(2)}>2</button>
      <button type="button" onClick={() => setStep(3)}>3</button>
      <form className="form" onSubmit={handleSubmit}>
        {step === 1 && <FirstStep props={props} fields={fields} /> }
        {step === 2 && <SecondStep props={props} fields={fields} />}
        {step === 3 && <ThirdStep props={props} fields={fields} />}
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
