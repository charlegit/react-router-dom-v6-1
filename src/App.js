// https://www.youtube.com/watch?v=ZM9SfAg-I0A 
// พื้นฐาน React Router Dom V6 สำหรับพัฒนา ReactJS Application,
import './App.css';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Profile from './Profile';

function App() {
  const [logIn, setLogIn] = useState(null)

  function handleLogin() {
    setLogIn(true)
  }

  function handleLogout(){
    setLogIn(false)
  }

  console.log(logIn);

  let activeClassName = "nav-active"
  return (
    <BrowserRouter >
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
        <NavLink to="contact" className={({ isActive }) => isActive ? activeClassName : undefined}>Contact</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={logIn ? <Navigate to = "/dashboard"/> : <Home logIn={handleLogin} />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/dashboard" element={logIn ? <Dashboard logout={handleLogout}/> : <Navigate to="/" state={"From Dashboard"}/>}>
          <Route path='settings' element={<p>This is the nested setings route</p>}/>
        </Route>
        {/* /dashboard/settings */}
        <Route path="/profile">
          <Route path=":userId"element={<Profile/>}/>

        </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
