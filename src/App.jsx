import './style/style.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart';
import CartContextProvider from './components/contex/CartContext';
import Checkout from './components/Checkout';




const App = () => { 
  return(
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/checkout"} element={<Checkout/>}/>
        </Routes>    
      </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
