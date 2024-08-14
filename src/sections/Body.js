

//////  Body
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming Tailwind CSS is configured here
import image11 from '../assets/Group37.png';

function Body() {
  return (
    <div className=' bg55'> 
    <div className="App  ">
      <div className='bg-gradient-to-br from-red-800 to-gray-900   '>
       {/* bg-gradient-to-br from-blue-500 to-green-500 '> */}
        <div className="fixed w-full z-0 flex md:flex md:flex-grow flex-row justify-end space-x-1 ">
          <Link to="/" className="py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold">Home</Link>
          <Link to="/services" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Services</Link>
          {/* <Link to="/about" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">About Us</Link> */}
          {/* <Link to="/contacts" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Contacts</Link> */}
        </div>
        <div className='p-32'>
          <p className='text-7xl'>WCS</p> 
          <p className='ml-7 text-3xl mt-3 text-yellow-50'> "Ahead of Threats"</p>
        </div>
      </div>
<div className='bg45 border border-red-700 ml-6 mr-6'>  
      <div className="c99 ml-6 mr-6 z-10">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="mb-8">Wise Cyber Solution is a...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>

      <div className=" ml-6 mr-6">
        <div className="container mx-auto p-8">
          <h2 className=" c99 text-3xl font-bold mb-4">Our Services</h2>
          <p className= " c99 mb-8">Complete integrated security solutions and services...</p>
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div className="bg-white p-4 border-8 border-white border-b-red-700">Network Security testing</div>
            <div className="bg-red-400 p-4">Penetration Tools</div>
            <div className="bg-red-500 p-4">Firewalls & IDEs</div>
            <div className="bg-red-400 p-4">Security Awareness Training</div>
            <div className="bg-red-500 p-4"> Incident Response & Forensics </div>
            
            <div className="bg-red-600 p-4">Quality Consultation</div>
          </div>
          <Link to="/services" className='bg-black text-white mt-6 py-2 px-4 rounded-full text-center cursor-pointer w-20'>
            More
          </Link>
        </div>
      </div>

      <div className="bg55 ml-6 mr-6 mt-4 border border-red-700">
        <div className="columns-2 container mx-auto p-8">
          <div className='col-span-1'>
            <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
            <p className='c99'>We are dedicated...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,.</p>
          </div>
          <div className="w-full col-span-1">
            <img src={image11} alt="Group 37" className="w-32 h-40" />
          </div>
        </div>
      </div>

      <div className='c99 ml-6 mr-6 mt-4 '>
     <h5>  Top Clients  </h5>
      <p></p>
      </div>


      <div className='c99 ml-6 mr-6 mt-4 '>
     <h5>  FAQ's  </h5>
      <p>General Questions Frequently Asked Questions?</p>
      </div>

      <div className='c99 mr-6 ml-6 mt-3 ' >
      <h6> Testimonial </h6>
      <p>Client Feedback & Reviews</p>
      </div>

      {/* <div className='bg-red-100 ml-6 mr-6 mt-4'>
      <h5>Privacy Policy</h5>
      <Link to="/privacy-policy" className='text-blue-500'>Read our Privacy Policy</Link>
    </div> */}
    <div className='c99 ml-6 mr-6 mt-4'>
      <h5>Terms of Service</h5>
      <Link to="/terms-of-service" className='text-blue-500'>Read our Terms of Service</Link>
    </div>

  <div className=' grid grid-cols-1 md:grid-cols-2 bg-red-900'>
      <div className=' mt-4'>
      <h5>Newsletter Signup</h5>
      <form>
        <input type="email" placeholder="Your email address" className="p-2 rounded" />
        <button type="submit" className='bg-black text-white py-2 px-4 rounded-full mt-2'>Subscribe</button>
      </form>
    </div>


      <div className=' mt-3'>
        <h4 className=' font-sans text-3xl'> Contact Us</h4>
        <p> Phone: </p>
        <p> Email: </p>
        <p> Location: </p>
      </div>
      </div>
      </div>
      </div>

      <footer className="bg-red-900 text-white py-2">
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