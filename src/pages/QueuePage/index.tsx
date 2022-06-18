import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { QueuePageContainer } from 'pages/QueuePage/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import NotOnQueue from 'pages/QueuePage/NotOnQueue';
import OnQueue from 'pages/QueuePage/OnQueue';
import api from 'service/api';

function QueuePage() {
  const location = useLocation();
  const [isOnQueue, setIsOnQueue] = useState<IQueue>();

  const selectedUbs = (location.state as ILocationStateQueue)?.selectedUbs;

  const updateQueue = () =>
    api
      .get<IQueue>('/appointment/me')
      .then(data => setIsOnQueue(data.data))
      .catch(() => {
        setIsOnQueue(undefined);
      });

  useEffect(() => {
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
