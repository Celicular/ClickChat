import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/register" element={<Register/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
