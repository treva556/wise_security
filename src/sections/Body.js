

//////  Body
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming Tailwind CSS is configured here
import image11 from '../assets/Group37.png';

function Body() {
  return (
    <div className="App">
      <div className='bg-red-800'>
        <div className="fixed w-full z-0 flex md:flex md:flex-grow flex-row justify-end space-x-1">
          <Link to="/" className="py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold">Home</Link>
          <Link to="/services" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Services</Link>
          <Link to="/about" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">About Us</Link>
          <Link to="/contacts" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Contacts</Link>
        </div>
        <div className='p-32'>
          <p className='text-7xl'>WCS</p> 
          <p className='ml-7 text-3xl mt-3 text-yellow-50'> "Ahead of Threats"</p>
        </div>
      </div>

      <div className="bg-red-100 ml-6 mr-6 z-10">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="mb-8">Wise Cyber Solution is a...</p>
        </div>
      </div>

      <div className="bg-red-100 ml-6 mr-6">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-8">Complete integrated security solutions and services...</p>
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div className="bg-red-200 p-4">Network Security testing</div>
            <div className="bg-red-400 p-4">Penetration Tools</div>
            <div className="bg-red-500 p-4">Firewalls & IDEs</div>
            <div className="bg-red-600 p-4">Quality Consultation</div>
          </div>
          <Link to="/services" className='bg-black text-white mt-6 py-2 px-4 rounded-full text-center cursor-pointer w-20'>
            More
          </Link>
        </div>
      </div>

      <div className="bg-red-100 ml-6 mr-6 mt-4">
        <div className="columns-2 container mx-auto p-8">
          <div className='col-span-1'>
            <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
            <p>We are dedicated...</p>
          </div>
          <div className="w-full col-span-1">
            <img src={image11} alt="Group 37" className="w-32 h-40" />
          </div>
        </div>
      </div>

      <footer className="bg-red-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>Complete integrated security solutions and services to customers worldwide.</p>
          <p>Contact: info@defenguard.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Body;

//