import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import SideBar from '../components/sideBar/SideBar';
import updateUserFields from '../service/updateUserFields';
import { updateUserAction } from '../actions';

function Config() {
  // const fields = ['email', ''];
  // const user = JSON.parse(localStorage.getItem('user')) || '';
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || '');
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [error, setError] = useState('');
  const [userData, serUserData] = useState({
    email: user.email, name: user.name, currPassword: '', newPassword: '',
  });

  const handleValueInput = (e) => {
    const { name } = e.target;
    serUserData({ ...userData, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = await dispatch(updateUserAction(userData, token));
    if (err) {
      const errCode = err.split(' ');
      if (errCode[0] === 'E11000') {
        setError('Email já cadastrado!');
      } else if (errCode[0] === 'Please') {
        setError('Por favor, insira uma senha diferente da anterior');
      } else {
        setError('Senha atual incorreta');
      }
    } else {
      setError('Usuário atualizado!');
    }
  };

  useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem('user'));
    setUser(newUser);
    serUserData({
      email: newUser.email, name: newUser.name, currPassword: '', newPassword: '',
    });
  }, [userState]);

  return (
    <div>
      <Header />
      <h1>Minha Conta</h1>
      <SideBar />
      <div className="user-data-config">
        <form action="update-data" onSubmit={handleSubmit}>
          {updateUserFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.name}>
                {field.label}
                <input
                  type={field.type}
                  name={field.name}
                  value={userData[field.name]}
                  onChange={handleValueInput}
                  required
                />
              </label>
            </div>
          ))}
          <button type="submit">Salvar Alterações</button>
        </form>
        {error && <p>{error}</p>}
        {/* </form>
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
            Senha Atual
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleValueInput}
              required
            />
          </label>
          <label htmlFor="password-confirmation">
            Nova Senha
            <input
              type="text"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleValueInput}
              required
            />
          </label> */}
        {/* <button type="submit">Salvar Alterações</button> */}

      </div>
    </div>
  );
}

export default Config;
