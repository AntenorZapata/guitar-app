import React, { useState, useEffect } from 'react';
import fields from '../../service/formFields';
import FormSteps from './FormSteps';
import './Form.css';
import LoginForm from '../LoginForm/LoginForm';
import Steps from '../Steps/Steps';

export default function Form(props) {
  const {
    handleSubmit, step, setStep,
  } = props;
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

  return (
    <>

      <Steps onClick={handleFormSteps} step={step}>
        <div className="form__container-table">
          <form className="form" onSubmit={handleSubmit}>
            <FormSteps
              props={props}
              error={error}
            />
            {/* <div className="login__btn btn-steps-table">
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
            </div> */}
          </form>
        </div>
      </Steps>
    </>
  );
}
