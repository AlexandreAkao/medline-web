import { FaUserAlt, FaLock } from 'react-icons/fa';
import { ChangeEvent, useState } from 'react';

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
import MedlineLogo from 'assets/images/medline-logo.svg';
import Header from 'components/Header';
import TextInput from 'components/TextInput';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import api from 'service/api';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    api.post('login', {
      email,
      password,
    });
  };

  return (
    <LoginContainer>
      <Header icon={MedlineLogo} iconAlt="Medline logo" isAuthenticated={false} />

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
              <Button primary={false} size="large" onClick={handleLogin}>
                Login
              </Button>
              <Button primary={false} size="large">
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
