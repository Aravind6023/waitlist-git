import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./css/style.css";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//Components
import {LandingPage} from './components/landingpage/LandingPage';
import { Register } from './components/login_and_register/Register';
import { User } from './components/user/User';
import { Login } from './components/login_and_register/Login';
import { Navbar } from "./components/navbar/Navbar";
import { Home } from './components/user/Home';
import { AdminNavbar } from './components/navbar/AdminNavbar';
import { UserList } from './components/admin/UserList';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<LandingPage/>]}></Route>
        <Route path='/register' element={[<Register/>]}></Route>
        <Route path='/register/:referal_code' element={[<Register/>]}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home/:uniqueid' element={[<Navbar/>,<Home/>]}></Route>
        <Route path='/admin/home/:uniqueid' element={[<AdminNavbar/>,<Home/>]}></Route>
        <Route path='/user_dashboard/:uniqueid' element={[<Navbar/>,<User/>]}></Route>
        <Route path='/admin/user_dashboard/:uniqueid' element={[<AdminNavbar/>,<UserList/>]}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
