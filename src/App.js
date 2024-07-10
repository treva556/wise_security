

//////App code 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css'; // Assuming you have Tailwind configured here
import Services from './sections/Services';
import Body from './sections/Body'; // Home component
// import About from './sections/About'; // About component
// import Contacts from './sections/Contacts'; // Contacts component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='bg-red-800 fixed w-full z-10 flex md:flex md:flex-grow flex-row justify-end space-x-1'>
          <NavLink to="/" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Services
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            About Us
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => isActive ? "py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold" : "py-4 px-2 text-white hover:text-red-300 transition duration-300"}>
            Contacts
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//////