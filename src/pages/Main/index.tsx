import { Link } from 'react-router-dom';
import { FaHospitalAlt } from 'react-icons/fa';

import TextInput from 'components/TextInput';

function Main() {
  return (
    <div>
      <h1>Landing page</h1>
      <TextInput Icon={FaHospitalAlt} placeholder="Teste gigi" />
      <Link to="/other-page">Ir para outra pagina</Link>
    </div>
  );
}

export default Main;
