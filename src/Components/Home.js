import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BannerBackground from "./image.png";
import Image1 from "./image1.png";
import Image2 from "./image2.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="image-container">
          <img src={BannerBackground} alt="" />
        </div>

        <div className="frame-box">
          <div className="text-inside-box">
            <p>We crush your competitors, goals, and sales records - without the B.S.</p>
            <div className="btnn">
            <button><a href=""><p>Get free consultation</p></a></button>
            </div>
          </div>
        </div>
        <div className="container1">
            <div className="row">
                <div className="col-sm-4">
                <div className="image-container2">
                    <img src={Image2} alt="" />
                </div>
                </div>
                <div className="col-sm-8">
                    <h6>Web & Mobile App Development</h6>
                    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <button><a href=""><p>learn More</p></a></button>
                    
                </div>
            </div>
        </div>
        <div className="container2">
            <div className="row">
            <div className="col-sm-8">
                    <h6>Digital Strategy Consulting</h6>
                    <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <button><a href=""><p>learn More</p></a></button>
                    
                </div>
                <div className="col-sm-4">
                <div className="image-container1">
                    <img src={Image1} alt="" />
                </div>
                </div>
            </div>
        </div>
        

      </div>
      
      <Footer/>

    </div>


  );
};

export default Home;
