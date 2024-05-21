
import Gorca from './Gorca.jpg'
import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar.js'
import Inicio  from './Components/Paginas/Inicio.js';    
import Catalogo from './Components/Paginas/Catalogo.js';
import Promociones from './Components/Paginas/Promociones.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
            <Navbar/>
        </Router>
        </header>
    </div>
  );
}

export default App;
