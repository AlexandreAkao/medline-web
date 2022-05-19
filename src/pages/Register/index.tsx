import { ChangeEvent, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

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
import Header from 'components/Header';
import MedlineLogo from 'assets/images/medline-logo.svg';
import TextInput from 'components/TextInput';
import { Mask } from 'utils/mask';
import Button from 'components/Button';
import api from 'service/api';

function Register() {
  const [userForm, dispatchUserForm] = useReducer(
    (state: IUserRegister, action: IUserRegisterAction) => {
      switch (action.type) {
        case 'name':
        case 'password':
        case 'email':
        case 'cpf':
        case 'rg':
          return { ...state, [action.type]: action.payload };
        case 'birthdate':
          return { ...state, [action.type]: action.payload.split('/').reverse().join('-') };
        case 'cep':
        case 'street':
        case 'number':
        case 'city':
        case 'state':
        case 'district':
          return { ...state, address: { ...state.address, [action.type]: action.payload } };
        default:
          return state;
      }
    },
    {
      name: '',
      password: '',
      email: '',
      birthdate: '',
      cpf: '',
      rg: '',
      address: {
        cep: '',
        city: '',
        district: '',
        number: '',
        state: '',
        street: '',
      },
    },
  );
  const navigate = useNavigate();

  const handleGoLoginPage = () => {
    navigate('/login');
  };

  const handleChangeInput = (type: UserRegisterTypes) => (event: ChangeEvent<HTMLInputElement>) =>
    dispatchUserForm({ payload: event.target.value, type });

  const handleRegisterUserButton = () => {
    api.post('user', userForm);
  };

  return (
    <RegisterContainer>
      <Header icon={MedlineLogo} iconAlt="Medline logo" isAuthenticated={false} />
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
          />
          <TextInput
            label="Confirmar senha"
            placeholder="Confirmar senha"
            onChange={handleChangeInput('password')}
            value={userForm.password}
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
            <Button primary={false} size="large" onClick={handleGoLoginPage}>
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
