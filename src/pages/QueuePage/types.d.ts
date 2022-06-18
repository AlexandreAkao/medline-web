interface ILocationStateQueue {
  selectedUbs?: string;
}

interface INotOnQueueProps {
  selectedUbsId?: string;
  updateQueue: () => Promise<void>;
}

interface IOnQueueProps {
  queueInfo: IQueue;
  updateQueue: () => Promise<void>;
}
