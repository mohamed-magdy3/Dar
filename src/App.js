import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Header';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Program from './components/Program';
import Table from './components/Table';
import Login from './components/Login';
import Main from './components/Main';

document.body.classList.add('background-blur');

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/programs' element={<Program/>} />
        <Route path='/table' element={<Table/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
