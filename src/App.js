import './App.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from "./Components/Login"
import Registrasi from "./Components/Registrasi"
import { Container } from "@material-ui/core"


function App() {
  return (
    <body>
      <div className="app">
        <div className="header">
          <Container>
            <BrowserRouter>
              <Route path={["/login", "/"]} exact component={Login} />
              <Route path="/registrasi" component={Registrasi} />
              <Route path="/home" component={Home} />
            </BrowserRouter>
          </Container>
        </div>
      </div>
    </body>
  )
}

export default App
