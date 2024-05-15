import './index.js';
import './App.css'
import Inicio from './Components/paginas/Inicio.js';
import {BrouserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Inicio/>
    </div>
  );
}

export default App;
