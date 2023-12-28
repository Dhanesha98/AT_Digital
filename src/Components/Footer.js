import React from "react";
import Logo from "./logo.png";

const Footer = () => {
  return (
    
      
    <div class="footer">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6">
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
          <p>
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>
        <div class="col-lg-3">
         <div className="topic">
         <p>Our Technologies </p>
        </div>
        <div className="type">
         <p>ReactJS </p>
         <p>Gatsby</p>
         <p>NextJS</p>
         <p>NodeJS</p>
         <p>GraphQL</p>
         <p>Laravel</p>
         </div>
       </div>
        <div class="col-lg-3">
        <div className="topic">
         <p>Our Services </p>
        </div>
        <div className="type">
        <p>Social Media Marketing</p>
         <p>Web & Mobile App Development</p>
         <p>Data & Analytics</p>
         <p>Google Marketing solutions</p>
         <p>Search Engine Optimization</p>
        </div>
         
        </div>
      </div>
    </div>
    <div class="text-center p-3">
  
 
</div>

   
  
</div>
  
  );
};

export default Footer;