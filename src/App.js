import React from 'react';
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';
import './App.css';
import NavBar from './navbar/NavBar';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Routes />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
