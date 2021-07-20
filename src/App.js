import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from "./Components/Login"
import Registrasi from "./Components/Registrasi"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
         <Route path={["/login", "/"]} exact component={Login} />
         <Route path="/registrasi" component={Registrasi}/>
          <Route path="/home" component={Home} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
