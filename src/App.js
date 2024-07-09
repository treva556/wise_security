import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className=''>
<div className= " ml-6 mt-10 p-10 bg-orange-500">\
  
  </div>    
  <div className= " ml-6 mt-10 p-28 bg-orange-500">\
  
  </div>  
  <div className= " ml-6 mt-10 p-28 bg-orange-500">\
  
  </div>  
  <div>
  <div className= " border-emerald-800 ml-6 mt-10 mb-10 p-10 bg-emerald-500">
               Start Start Start
  </div> 

    <div className= " ml-6 p-10 bg-orange-500">\
</div>

  </div>
  <div className= " ml-6 p-12 mt-5 bg-emerald-900">\
</div>

  </div> 

<div className=' h-64 w-64 ml-6 mt-4 p-4 bg-emerald-600'>
  jj
</div>

<div className="flex flex-col items-center">
        <div className="mt-10 p-28 bg-orange-500">
          Row 1
        </div>
        <div className="mt-10 p-28 bg-orange-500">
          Row 2
        </div>
        <div className="mt-10 p-28 bg-orange-500">
          Row 3
        </div>
      </div>

      <div class="grid grid-cols-3 gap-4 p-10 bg-gray-700 mt-6">
  <div class=" p-12 bg-slate-950">01</div>
  <div class="...">02</div>
  <div class=" h-60 w-64 bg-slate-950 text-white">01</div>

  </div>


      {/* Static Background Image */}
      <div className="relative h-screen bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">UNATTENDED GROUND SENSOR</h1>
          <div className="flex space-x-4">
            <button className="bg-green-600 px-4 py-2 rounded">ALL PRODUCTS</button>
            <button className="bg-green-600 px-4 py-2 rounded">CONTACT US</button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="bg-white">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="mb-8">Complete integrated security solutions and services...</p>

          {/* Additional Sections */}
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-blue-200 p-4">Electro-Optical Devices</div>
            <div className="bg-blue-300 p-4">Unattended Ground Sensors</div>
            <div className="bg-blue-400 p-4">Portable Optical Devices</div>
            <div className="bg-blue-500 p-4">Wireless Multi-Sensor</div>
            <div className="bg-blue-600 p-4">Special Client Solution</div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>Complete integrated security solutions and services to customers worldwide.</p>
          <p>Contact: info@defenguard.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
