
import './App.css';
import CartContainer from './components/CartContainer';
import { BsInbox } from "react-icons/bs";
import {AppContext} from './contexts/index';
import react,{useContext} from 'react';

function App() {
  const dataContext=useContext(AppContext);
  return (
    <div className="App">
      <header className="App-header">
          <div className="group-logo-cartCount">
           <div className="logoUse"><p>UseReducer</p></div>
           <div className="countProduct"><BsInbox /><span>{dataContext.cartItems.length}</span></div>
          </div>
      </header>
      <div className="body">
        <CartContainer /> 
      </div>
    </div>
  );
}

export default App;
