import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import updateUserFields from '../../service/updateUserFields';
import { updateUserAction } from '../../actions';
import AccountTitle from '../../components/AccountTitle/AccountTitle';
import './Config.css';
import Footer from '../../components/Footer/Footer';

function Config() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || '');
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    email: user.email, name: user.name, currPassword: '', newPassword: '',
  });

  const handleValueInput = (e) => {
    const { name } = e.target;
    setUserData({ ...userData, [name]: e.target.value });
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
    setUserData({
      email: newUser.email,
      name: newUser.name,
      currPassword: '',
      newPassword: '',
    });
  }, [userState]);

  return (
    <div>
      <Header />
      <section className="main__container config__container">
        <div className="overflow__content" />
        <div className="account-content">
          <SideBar />
          <div className="user-data-config">
            <form action="update__data" onSubmit={handleSubmit}>
              {updateUserFields.map((field) => (
                <div key={field.id} className="input-box-account">
                  <span htmlFor={field.name}>
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={userData[field.name]}
                    onChange={handleValueInput}
                    className="pass-valid"
                    placeholder={field.label.includes('Senha')
                      ? 'senha de 8 digitos' : field.label}
                    required
                  />
                </div>
              ))}
              <div className="login__btn account__btn">
                <button type="submit">Salvar Alterações</button>
              </div>
            </form>
            <p className={error ? 'input__error' : 'input__error__hidden'}>
              {error || 'error msg'}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Config;
