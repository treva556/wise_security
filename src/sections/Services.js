
//////
import React from 'react';

function Services() {
  return (
    <div className="container mx-auto p-8 ">
            <h1 className=" text-white text-4xl font-bold mb-4">Our Services</h1>

      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="mb-8">Details about the services we offer...</p>
      {/* Add more content as needed */}

      <div className="bg-red-100 ml-6 mr-6">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-8">Complete integrated security solutions and services...</p>
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div className="bg-red-200 p-4">Network Security testing</div>
            <div className="bg-red-400 p-4">Penetration Tools</div>
            <div className="bg-red-500 p-4">Firewalls & IDEs</div>
            <div className="bg-red-400 p-4">Security Awareness Training</div>
            <div className="bg-red-500 p-4"> Incident Response & Forensics </div>
            
            <div className="bg-red-600 p-4">Quality Consultation</div>
          </div>
         
        </div>
      </div>

    </div>
  );
}

export default Services;

//