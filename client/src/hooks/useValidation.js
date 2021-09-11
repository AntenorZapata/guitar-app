export default function useValidation() {
  const handleEmailValidation = ({ target: { name, value } }, error, setError) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (name === 'email' && !value.match(pattern)) {
      setError({ ...error, email: { valid: false, text: 'Por favor insira um endereço de e-mail válido' } });
    } else {
      setError({ ...error, email: { valid: true } });
    }
  };

  const handlePasswordValidation = ({ target: { name, value } }, error, setError) => {
    if (name === 'password' && value.length < 8) {
      setError({ ...error, password: { valid: false, text: 'A senha deve ter pelo menos 6 caracteres' } });
    } else {
      setError({ ...error, password: { valid: true } });
    }
  };
  return { handleEmailValidation, handlePasswordValidation };
}
