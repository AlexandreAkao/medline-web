import { FaPaperclip, FaRegPaperPlane } from 'react-icons/fa';

import Button from 'components/Button';
import MedlineHeader from 'components/Header/MedlineHeader';
import Switch from 'components/Switch';
import {
  RequestContainer,
  RequestForm,
  RequestHelp,
  RequestMain,
  RequestFormTitle,
  RequestFormDescription,
  RequestFormDescriptionTitle,
  RequestFormDescriptionSubTitle,
  RequestFormDescriptionCheckboxs,
  RequestFormButtonContainer,
} from 'pages/RequestPage/styles';
import FileInput from 'components/FileInput';
import Radio from 'components/Radio';

function RequestPage() {
  const describeCovid = (
    <Radio id="covid" primary>
      Covid-19
    </Radio>
  );

  return (
    <RequestContainer>
      <MedlineHeader />
      <RequestMain>
        <RequestHelp>
          Adicionar Texto Explicativo para esta página.Acho uma boa idéia aqui escrevermos textos
          para auxilixar o usuário nesta tela
        </RequestHelp>
        <RequestForm>
          <RequestFormTitle>Solicitações</RequestFormTitle>
          <Switch
            optionLeft={{ label: 'Atestado', value: '0' }}
            optionRight={{ label: 'Receita', value: '1' }}
          />
          <RequestFormDescription>
            <RequestFormDescriptionTitle>Descrição</RequestFormDescriptionTitle>
            <RequestFormDescriptionSubTitle>
              Selecione uma descrição:
            </RequestFormDescriptionSubTitle>
            <RequestFormDescriptionCheckboxs>
              {Array.from({ length: 12 }).map(() => describeCovid)}
            </RequestFormDescriptionCheckboxs>
          </RequestFormDescription>

          <RequestFormButtonContainer>
            <FileInput primary={false}>
              <FaPaperclip />
              Anexar
            </FileInput>
            <Button primary={false}>
              <FaRegPaperPlane />
              Enviar
            </Button>
          </RequestFormButtonContainer>
        </RequestForm>
      </RequestMain>
    </RequestContainer>
  );
}

export default RequestPage;
