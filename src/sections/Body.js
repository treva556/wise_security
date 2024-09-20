

//////  Body
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming Tailwind CSS is configured here
import image11 from '../assets/Group37.jpg';
import Huawei from '../assets/huawei.png';
import Oracle from '../assets/oracle.png';
import Uber from '../assets/uber.png';
import Unity from '../assets/unity.png';

function Body() {
  return (
    <div className=' bg55'> 
    <div className="App  ">
      <div className='bg-gradient-to-br from-red-800 to-gray-900   '>
       {/* bg-gradient-to-br from-blue-500 to-green-500 '> */}
        <div className="fixed w-full z-0 flex md:flex md:flex-grow flex-row justify-end space-x-1 ">
          {/* <Link to="/" className="py-4 px-2 text-red-500 border-b-4 border-red-300 font-semibold">Home</Link>
          <Link to="/services" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Services</Link> */}
          {/* <Link to="/about" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">About Us</Link> */}
          {/* <Link to="/contacts" className="py-4 px-2 font-semibold hover:text-red-300 transition duration-300">Contacts</Link> */}
        </div>
        <div className='p-32'>
          <p className='text-7xl'>WCS</p> 
          <p className='ml-7 text-3xl mt-3 text-yellow-50'> "Ahead of Threats"</p>
          <div className=' flex bg-white w-48 border-2 font-mono text-sm p-2 rounded-3xl justify-start'>
            CALL: +254788988988
          </div>
        </div>
      </div> 
       <div className='bg45 border border-red-700 ml-2 mr-2 md:mx-12 '>  
      <div className="c99  p-2 z-10">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="mb-4">Wise Cyber Solution is a...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>

      <div className=" ">
        <div className="container mx-auto p-1">
          <h2 className=" c99 text-3xl font-bold mb-4">Our Solutions</h2>
          <p className= " c99 mb-8">Complete integrated security solutions and services...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            <div className="bg-white p-4 border-8 border-white border-b-red-700">Network Security testing</div>
            <div className=" text-white  bg65 p-4">Penetration Tools</div>
            <div 
            // style={{ border: '2px solid #121B28' }} 
            className="bg65  p-4 text-white">Firewalls & IDEs</div>
            <div className="bg-white p-4 border-8 border-white border-b-red-700  ">Security Awareness Training</div>
            <div className=" bg-white p-4 border-8 border-white border-b-red-700 "> Incident Response & Forensics </div>
            
            <div className="bg65 p-4 text-white">Quality Consultation</div>
          </div>
          <Link to="/services" className='bg-black text-white mt-6 py-2 px-4 rounded-full text-center cursor-pointer w-20'>
            More
          </Link>
        </div>
      </div>


      <div className='flex bg55 flex-col md:flex-row justify-between  items-center mt-8'>
  {/* Why Us Text */}
  <div className="bg55 p-4 md:w-1/2">
    <h2 className="text-3xl font-bold mb-2">Why Us?</h2> 
    <p className="text-base leading-6"> 
      We are dedicated to providing top-tier cybersecurity services that align with your business goals. Our experience, industry knowledge, and innovative solutions make us the perfect partner for securing your digital assets and infrastructure.
    </p>
  </div> 

  {/* Image Section */}
  <div className="md:w-1/2 p-4">
    <img src={image11} alt="Group 37" className="w-full lg:h-72 " />
  </div>
</div>
      


      {/* Testimonials Section */}
      <div className='c99 ml-6 mr-6 mt-4'>
        <h5 className='text-3xl font-bold'>Top Clients</h5>
        <p>We have worked with numerous clients in various industries, from financial institutions to tech firms. Our solutions are trusted by leading companies across the globe.</p>
        <div className='flex gap-8 justify-center bg-red-50 p-4 mt-4 '>
          <div>
          <img src={Huawei} alt="Group 37" className="w-24 " />

          </div>
          <div>
          <img src={Uber} alt="Group 37" className="w-24 " />

          </div>
          <div>
          <img src={Unity} alt="Group 37" className="w-24 " />

          </div>
          <div>
          <img src={Oracle} alt="Group 37" className="w-24 " />

          </div>
        </div>
      </div>

      <div className='c99 ml-6 mr-6 mt-3'>
        <h6 className='text-3xl font-bold'>Testimonial</h6>
        <div className=' text-white'>
        <p>"Wise Cyber Solution has been a great partner in protecting our business from potential threats. Their team is highly professional and responsive to all our security needs." - John Doe, CEO of Techno Solutions</p>

        </div>
      </div>

      {/* FAQ Section */}
      <div className='c99 ml-6 mr-6 mt-4'>
        <h5 className='text-3xl font-bold'>FAQ's</h5>
        <div className=' text-white'>
        <p>Q: What services do you offer?<br />A: We offer a wide range of cybersecurity services including Network Security Testing, Incident Response, Penetration Testing, and more.</p>
        <p>Q: How experienced is your team?<br />A: Our team consists of highly skilled professionals with over 10 years of experience in the cybersecurity field.</p>
        <p>Q: Do you provide custom solutions?<br />A: Yes, we tailor our solutions to meet the specific needs of our clients.</p>
        </div>
        
      </div>


      {/* <div className='bg-red-100 ml-6 mr-6 mt-4'>
      <h5>Privacy Policy</h5>
      <Link to="/privacy-policy" className='text-blue-500'>Read our Privacy Policy</Link>
    </div> */}
    <div className='c99 mb-4 mt-4'>
      {/* <h5>Terms of Service</h5> */}
      <Link to="/terms-of-service" className='underline'>Terms of Service</Link>
    </div>

  <div className=' grid grid-cols-1 md:grid-cols-2 bg-red-800'>
      <div className=' mt-4'>
      <h5>Newsletter Signup</h5>
      <form>
        <input type="email" placeholder="Your email address" className="p-2 rounded" />
        <button type="submit" className='bg-black text-white py-2 px-4 rounded-full mt-2'>Subscribe</button>
      </form>
    </div>


      <div className=' py-9'>
        <h4 className=' font-sans text-3xl'> Contact Us</h4>
        <p> Phone: +254713703334</p>
        <p> Email: support@wcs.com </p>
        <p> Location: Green Plaza, Nairobi CBD, Nairobi </p>
      </div>
      </div>
      </div>
      </div>

      <footer className="bg-red-800 text-white py-2">
        <div className="container mx-auto text-center ">
          <p>Complete integrated security solutions and services to customers worldwide.</p>
          <p>Contact: info@defenguard.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Body;

//