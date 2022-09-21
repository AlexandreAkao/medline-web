import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { EditProfileContainer, EditProfileSection, EditProfileTitle } from 'pages/EditProfile/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import { editUserFormInitialState, editUserFormReducer } from 'pages/EditProfile/reducer';
import api from 'service/api';
import { useAuth } from 'hooks/useAuth';

function EditProfile() {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editUserForm, dispatchEditUserForm] = useReducer(editUserFormReducer, editUserFormInitialState);
  const navigate = useNavigate();
  const { saveUserInfo } = useAuth();

  useEffect(() => {
    api.get<IUser>('user/info').then(data => {
      const { name, email } = data.data;

      dispatchEditUserForm({ payload: name, type: 'name' });
      dispatchEditUserForm({ payload: email, type: 'email' });
    });
  }, []);

  const handleChangeInput = (type: EditUserRegisterTypes) => (event: ChangeEvent<HTMLInputElement>) =>
    dispatchEditUserForm({ payload: event.target.value, type });

  const handleSubmitEditUser = async () => {
    if (editUserForm.password !== confirmPassword || editUserForm.password === '' || confirmPassword === '') {
      toast.error('As senhas precisam ser iguais');
      return;
    }
    const data = await api.put('user', editUserForm);

    if (data.status === 200) {
      toast.success('Usuário atualizado com sucesso!');
      saveUserInfo(data.data);
      navigate('/');
    }
  };

  return (
    <EditProfileContainer>
      <MedlineHeader />

      <EditProfileSection>
        <EditProfileTitle>Editar Perfil</EditProfileTitle>
        <TextInput label="Nome" placeholder="Nome" value={editUserForm.name} onChange={handleChangeInput('name')} />
        <TextInput label="Email" placeholder="Email" value={editUserForm.email} onChange={handleChangeInput('email')} />

        <TextInput label="Senha" placeholder="Senha" onChange={handleChangeInput('password')} isPassword />
        <TextInput
          label="Confirmar senha"
          placeholder="Confirmar senha"
          onChange={e => setConfirmPassword(e.target.value)}
          isPassword
        />
        <Button primary={false} size="large" onClick={handleSubmitEditUser}>
          Salvar
        </Button>
      </EditProfileSection>
    </EditProfileContainer>
  );
}

export default EditProfile;
