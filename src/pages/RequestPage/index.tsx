import { FormEvent, useReducer, useState } from 'react';
import { FaPaperclip, FaRegPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import MedlineHeader from 'components/Header/MedlineHeader';
import Switch from 'components/Switch';
import {
  RequestContainer,
  RequestForm,
  RequestOptionContainer,
  RequestFormTitle,
  RequestFormDescription,
  RequestFormDescriptionTitle,
  RequestFormDescriptionCheckboxs,
  RequestFormButtonContainer,
  RequestDescriptionContainer,
  RequestDescription,
  RequestDescriptionTitle,
  RequestFieldsContainer,
} from 'pages/RequestPage/styles';
import FileInput from 'components/FileInput';
import Radio from 'components/Radio';
import { requestFormInitialState, requestFormReducer } from 'pages/RequestPage/reducer';
import { REQUEST_OPTIONS } from 'pages/RequestPage/constants';
import { isFormValid } from './validation';
import api from 'service/api';
import colors from 'styles/colors';
import Loader from 'components/Loader';

function RequestPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [requestForm, dispatchRequestForm] = useReducer(requestFormReducer, requestFormInitialState);

  const handleChangeForm = (payload: string | number | File, type: RequestFormTypes) => {
    dispatchRequestForm({ type, payload });
  };

  const handleSubmitRequest = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      event.preventDefault();

      if (!isFormValid(requestForm)) {
        toast.error('Preencha todos os campos', { theme: 'colored' });
        return;
      }

      const { description, text, type, file } = requestForm;
      const formData = new FormData();
      formData.append('request', JSON.stringify({ description, text, type }));
      formData.append('file', file as File);

      const requestReponse = await api.post('request', formData);

      if (requestReponse.status === 200) {
        toast.success('Solicitação criada com Sucesso', { theme: 'colored' });
        navigate('/prescription');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RequestContainer>
      {isLoading && <Loader />}
      <MedlineHeader />
      <RequestForm onSubmit={handleSubmitRequest}>
        <RequestFieldsContainer>
          <RequestDescriptionContainer>
            <RequestDescriptionTitle>Descrição</RequestDescriptionTitle>
            <RequestDescription
              placeholder="Descreva o seu problema"
              onChange={event => handleChangeForm(event.target.value, 'text')}
            />
          </RequestDescriptionContainer>
          <RequestOptionContainer>
            <RequestFormTitle>Solicitações</RequestFormTitle>
            <Switch
              optionLeft={{ label: 'Atestado', value: 1 }}
              optionRight={{ label: 'Receita', value: 0 }}
              onChange={event => {
                handleChangeForm(event.value, 'type');
                handleChangeForm(-1, 'description');
              }}
            />
            <RequestFormDescription>
              <RequestFormDescriptionTitle>Selecione uma das opções:</RequestFormDescriptionTitle>
              <RequestFormDescriptionCheckboxs>
                {Object.entries(REQUEST_OPTIONS[requestForm.type]).map(([key, value]) => (
                  <Radio
                    primary
                    key={key}
                    id={key}
                    name="option"
                    onChange={event => handleChangeForm(event.target.value, 'description')}
                    value={key}
                  >
                    {value}
                  </Radio>
                ))}
              </RequestFormDescriptionCheckboxs>
            </RequestFormDescription>
          </RequestOptionContainer>
        </RequestFieldsContainer>
        <RequestFormButtonContainer>
          <FileInput primary={false} onChange={files => handleChangeForm(files[0], 'file')}>
            <FaPaperclip color={requestForm.file ? colors.primary.normal : colors.black.normal} />
            Anexar
          </FileInput>
          <Button primary={false} type="submit" disabled={isLoading}>
            <FaRegPaperPlane />
            Enviar
          </Button>
        </RequestFormButtonContainer>
      </RequestForm>
    </RequestContainer>
  );
}

export default RequestPage;
