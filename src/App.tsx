import { HeaderAplication } from './components/HeaderAplication';
import './styles/global.css';


function App() { //No react nunca pode ter varios componentes debaixo do outro sem uma div por volta deles
  return (
    <div className="container">
      <HeaderAplication />
    </div>
  );
}


export default App;
