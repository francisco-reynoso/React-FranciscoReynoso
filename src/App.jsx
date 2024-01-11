import './style/style.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';

const App = () => { 
  return(
    <div>
      <NavBar/>
      <ItemListContainer titulo = "¡sitio en mantenimiento!" mensaje={"por favor vuelva pronto"}/>
    </div>
  )
}

export default App
