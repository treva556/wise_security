

//////App code 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import image11 from './assets/Group37.png';
import Services from './sections/Services';
import Body from './sections/Body'; // Create a Home component
// import About from './sections/About'; // Create an About component
// import Contacts from './sections/Contacts'; // Create a Contacts component

function App() {
  return (
    <Router>
      <div className="App">
        <div className='bg-red-800'>
          {/* Fixed and w-full for static */}
          {/* <Body/> */}
          <div className="fixed w-full z-0 flex md:flex md:flex-grow flex-row justify-end space-x-1">
            <Link to="/" className="py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold">Home</Link>
            <Link to="/services" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Services</Link>
            <Link to="/about" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">About Us</Link>
            <Link to="/contacts" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Contacts</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


//////