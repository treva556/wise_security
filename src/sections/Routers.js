
import React from 'react';
import { Route } from "react-router"
  

function Routers () {
return  (
    <>
    <Router>
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/services" element={<Services />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
    </Router>

    </>

)

}


export default Routers;



