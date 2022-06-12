import {
  EditProfileContainer,
  EditProfileSection,
  EditProfileTitle,
} from 'pages/EditProfile/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import TextInput from 'components/TextInput';
import Button from 'components/Button';

function EditProfile() {
  return (
    <EditProfileContainer>
      <MedlineHeader />

      <EditProfileSection>
        <EditProfileTitle>Editar Perfil</EditProfileTitle>

        <TextInput label="Nome" placeholder="Nome" />
        <TextInput label="Email" placeholder="Email" />
        <TextInput label="Senha" placeholder="Senha" />
        <TextInput label="Confirmar senha" placeholder="Confirmar senha" />

        <Button primary={false} size="large">
          Salvar
        </Button>
      </EditProfileSection>
    </EditProfileContainer>
  );
}

export default EditProfile;
