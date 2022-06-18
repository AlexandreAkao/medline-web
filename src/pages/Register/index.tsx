import { ChangeEvent, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  RegisterContainer,
  RegisterContent,
  RegisterBackground,
  RegisterFormContainer,
  RegisterFormRow,
  AddressFormSection,
  AddressFormTitle,
  RegisterFormTittle,
  AddressFormButtonsContainer,
} from 'pages/Register/styles';
import TextInput from 'components/TextInput';
import { Mask } from 'utils/mask';
import Button from 'components/Button';
import api from 'service/api';
import MedlineHeader from 'components/Header/MedlineHeader';
import { userFormInitialState, userFormReducer } from 'pages/Register/reducer';
import { useAuth } from 'hooks/useAuth';

function Register() {
  const [userForm, dispatchUserForm] = useReducer(userFormReducer, userFormInitialState);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChangeInput = (type: UserRegisterTypes) => (event: ChangeEvent<HTMLInputElement>) =>
    dispatchUserForm({ payload: event.target.value, type });

  const handleRegisterUserButton = async () => {
    if (
      userForm.password !== confirmPassword ||
      userForm.password === '' ||
      confirmPassword === ''
    ) {
      toast.error('As senhas precisam ser iguais');
      return;
    }
    const data = await api.post('user', userForm);

    if (data.status === 200) {
      toast.success('Usuário criado com sucesso!');
      handleLogin({
        email: userForm.email,
        password: userForm.password,
      });
      navigate('/');
    }
  };

  return (
    <RegisterContainer>
      <MedlineHeader />

      <RegisterContent>
        <RegisterBackground />

        <RegisterFormContainer>
          <RegisterFormTittle>Informe seus dados</RegisterFormTittle>
          <RegisterFormRow>
            <TextInput
              label="Nome"
              placeholder="Nome"
              name="name"
              onChange={handleChangeInput('name')}
              value={userForm.name}
            />
            <TextInput
              label="Data de Nascimento"
              placeholder="Data de Nascimento"
              name="birth"
              mask={Mask.Date}
              onChange={handleChangeInput('birthdate')}
              value={userForm.birthdate.split('-').reverse().join('/')}
            />
          </RegisterFormRow>

          <RegisterFormRow>
            <TextInput
              label="CPF"
              placeholder="CPF"
              mask={Mask.CPF}
              onChange={handleChangeInput('cpf')}
              value={userForm.cpf}
            />
            <TextInput
              label="RG"
              placeholder="RG"
              mask={Mask.RG}
              onChange={handleChangeInput('rg')}
              value={userForm.rg}
            />
          </RegisterFormRow>
          <TextInput
            label="Email"
            placeholder="Email"
            onChange={handleChangeInput('email')}
            value={userForm.email}
          />
          <TextInput
            label="Senha"
            placeholder="Senha"
            onChange={handleChangeInput('password')}
            value={userForm.password}
            isPassword
          />
          <TextInput
            label="Confirmar senha"
            placeholder="Confirmar senha"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            isPassword
          />

          <AddressFormSection>
            <AddressFormTitle>Endereço</AddressFormTitle>
            <RegisterFormRow>
              <TextInput
                label="CEP"
                placeholder="CEP"
                mask={Mask.CEP}
                onChange={handleChangeInput('cep')}
                value={userForm.address.cep}
              />
              <TextInput
                label="Estado"
                placeholder="Estado"
                onChange={handleChangeInput('state')}
                value={userForm.address.state}
              />
            </RegisterFormRow>
            <RegisterFormRow>
              <TextInput
                label="Rua"
                placeholder="Cidade"
                onChange={handleChangeInput('street')}
                value={userForm.address.street}
                name="street-address"
              />
              <TextInput
                label="Cidade"
                placeholder="Cidade"
                onChange={handleChangeInput('city')}
                value={userForm.address.city}
              />
            </RegisterFormRow>
            <RegisterFormRow>
              <TextInput
                label="Nº Residência"
                placeholder="Nº Residência"
                onChange={handleChangeInput('number')}
                value={userForm.address.number}
              />
              <TextInput
                label="Bairro"
                placeholder="Bairro"
                onChange={handleChangeInput('district')}
                value={userForm.address.district}
              />
            </RegisterFormRow>
          </AddressFormSection>
          <AddressFormButtonsContainer>
            <Button primary={false} size="large" onClick={handleGoBack}>
              Voltar
            </Button>
            <Button primary={false} size="large" onClick={handleRegisterUserButton}>
              Cadastrar
            </Button>
          </AddressFormButtonsContainer>
        </RegisterFormContainer>
      </RegisterContent>
    </RegisterContainer>
  );
}

export default Register;
