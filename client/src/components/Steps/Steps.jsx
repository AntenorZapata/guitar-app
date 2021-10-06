import React, { Children, useState } from 'react';
import './Steps.css';

function Steps({ children, onClick, step }) {
  const [steps, setSteps] = useState(1);

  const handleSteps = () => {
    setSteps((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <div className="progress-container">
          <div className={`progress progress-step${step}`} id="progress" />
          <div className={step === 1 || step > 1 ? 'circle active' : 'circle'}>1</div>
          <div className={step === 2 || step > 2 ? 'circle active' : 'circle'}>2</div>
          <div className={step === 3 ? 'circle active' : 'circle'}>3</div>
        </div>
        {children}
        <div className="login__btn btn-steps-table">
          {step > 1 && (
          <button
            type="button"
            className="form-step-button"
            name="back"
            onClick={onClick}
          >
            Voltar
          </button>
          )}
          <button
            type="button"
            className="form-step-button"
            name="next"
            onClick={onClick}
            disabled={step === 3}
          >
            Próximo
          </button>
        </div>
      </div>
      <div className="overflow__content-steps" />
    </>
  );
}

export default Steps;
