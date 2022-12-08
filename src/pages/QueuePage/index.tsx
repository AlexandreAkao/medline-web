import { useLocation } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';

import { QueuePageContainer } from 'pages/QueuePage/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import NotOnQueue from 'pages/QueuePage/NotOnQueue';
import OnQueue from 'pages/QueuePage/OnQueue';
import api from 'service/api';

function QueuePage() {
  const location = useLocation();
  const [isOnQueue, setIsOnQueue] = useState<IQueue>();

  const selectedUbs = (location.state as ILocationStateQueue)?.selectedUbs;

  const updateQueue = async () => {
    try {
      const hasAppointment = await api.get<IQueue>('/appointment/me');

      setIsOnQueue(hasAppointment.data);
    } catch (error) {
      setIsOnQueue(undefined);
    }
  };

  useLayoutEffect(() => {
    updateQueue();
  }, []);

  return (
    <QueuePageContainer>
      <MedlineHeader />
      {isOnQueue ? (
        <OnQueue updateQueue={updateQueue} queueInfo={isOnQueue} />
      ) : (
        <NotOnQueue updateQueue={updateQueue} selectedUbsId={selectedUbs} />
      )}
    </QueuePageContainer>
  );
}

export default QueuePage;
