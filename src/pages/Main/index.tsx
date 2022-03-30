import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Landing page</h1>
      <Link to="/other-page">Ir para outra pagina</Link>
    </div>
  );
}

export default Main;
