import React, { useState } from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideBar/SideBar';

function Config() {
  const user = JSON.parse(localStorage.getItem('user')) || '';
  const [userData, serUserData] = useState({
    email: user.email, name: user.name, password: '', confirmPassword: '',
  });

  const handleValueInput = (e) => {
    const { name } = e.target;
    serUserData({ ...userData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.email, userData);
  };

  return (
    <div>
      <Header />
      <h1>Minha Conta</h1>
      <SideBar />
      <div className="user-data-config">
        <form action="update-data" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleValueInput}
              required
            />
          </label>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleValueInput}
            />
          </label>
          <label htmlFor="new-password">
            Nova senha
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleValueInput}
              required
            />
          </label>
          <label htmlFor="password-confirmation">
            Confirmar Senha
            <input
              type="text"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleValueInput}
              required
            />
          </label>
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
}

export default Config;
