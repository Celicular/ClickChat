// import Navbar from './components/Navbar';
import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import ConfirmRegister from './components/confirmRegister';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login/>}>
          </Route>
          <Route exact path="/register" element={<Register/>}>
          </Route>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/confirmRegister" element={<ConfirmRegister/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
