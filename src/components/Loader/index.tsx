import { LoaderContainer, LoaderSpin } from 'components/Loader/styles';

function Loader({ isVisible }: ILoaderProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <LoaderContainer>
      <LoaderSpin />
    </LoaderContainer>
  );
}

export default Loader;
