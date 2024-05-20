
import Gorca from './Gorca.jpg'
import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar.js'
import Inicio  from './Components/Paginas/Inicio.js';    
import Items from './Components/Paginas/Items.js';
import Pokemons from './Components/Paginas/Pokemons.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Gorca} className="App-logo" alt="logo" />
      
        <Router>
            <Navbar/>
        </Router>
        </header>
    </div>
  );
}

export default App;
