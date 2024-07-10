
import React from 'react';
import './App.css';
import image11 from './assets/Group 37.png';

function App() {
  return (
    <div className="App">
      <div className=' bg-red-800'>
              {/* Fixed and w-full for static */}

        <div className="fixed w-full z-0 flex md:flex md:flex-grow flex-row justify-end space-x-1">
          <a href="#" className="py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold">Home</a>
          <a href="#" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Services</a>
          <a href="#" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">About</a>
          <a href="#" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Contact Us</a>
        </div>
        <div className='p-32'>
          <p className='text-7xl'>
            WCS
          </p> 
          <p className='text-3xl mt-3 text-yellow-50'> "Ahead of Threats"</p>
        </div>
      </div>

     
      {/* Add top padding to the main content */}
      <div className=" bg-red-100 ml-6 mr-6 z-10">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="mb-8">Complete integrated security solutions and services...</p>
        </div>
      </div>

      <div className="bg-red-100 ml-6 mr-6">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-8">Complete integrated security solutions and services...</p>

          {/* Additional Sections */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-red-200 p-4">Electro-Optical Devices</div>
            <div className="bg-red-400 p-4">Portable Optical Devices</div>
            <div className="bg-red-500 p-4">Wireless Multi-Sensor</div>
            <div className="bg-red-600 p-4">Special Client Solution</div>
          </div>
        </div>
      </div>

      <div className="columns-2 bg-red-100 ml-6 mr-6 mt-4">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
          <div className="w-full">
            <img src={image11} alt="Group 37" className="w-full" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-red-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>Complete integrated security solutions and services to customers worldwide.</p>
          <p>Contact: info@defenguard.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
//////