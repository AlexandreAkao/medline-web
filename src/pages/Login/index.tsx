import { FaUserAlt, FaLock } from 'react-icons/fa';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  LoginBackground,
  LoginContainer,
  LoginContent,
  LoginForgotPassword,
  LoginFormButtons,
  LoginFormContainer,
  LoginFormLogin,
  LoginRemember,
  LoginTitle,
} from 'pages/Login/styles';
import TextInput from 'components/TextInput';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import MedlineHeader from 'components/Header/MedlineHeader';

function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLoginButton = async () => {
    await handleLogin({ email, password });
    toast.success('Login feito com sucesso');
  };

  return (
    <LoginContainer>
      <MedlineHeader />

      <LoginContent>
        <LoginBackground />

        <LoginFormContainer>
          <LoginFormLogin>
            <LoginTitle>Entre com seu acesso</LoginTitle>

            <TextInput
              label="Usuário"
              Icon={FaUserAlt}
              placeholder="Email"
              onChange={handleChangeEmail}
              value={email}
            />
            <TextInput
              label="Senha"
              Icon={FaLock}
              isPassword
              placeholder="Senha"
              onChange={handleChangePassword}
              value={password}
            />

            <LoginRemember>
              <Checkbox>Lembrar de mim</Checkbox>
              <LoginForgotPassword>Esqueceu a senha?</LoginForgotPassword>
            </LoginRemember>

            <LoginFormButtons>
              <Button primary={false} size="large" onClick={handleLoginButton}>
                Login
              </Button>
              <Button primary={false} size="large" onClick={handleRegister}>
                Cadastrar
              </Button>
            </LoginFormButtons>
          </LoginFormLogin>
        </LoginFormContainer>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
