import React from 'react';
import symbol from '../../imgs/symbol.png';

function LoginForm({ children }) {
  return (
    <section className="img__container">
      <div className="contentBx">
        <div className="form__container">
          <div className="form__title">
            <img src={symbol} alt="guitar-symbol" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
