import React from "react"
import './App.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import woman from "./Images/woman.png"
import organic from "./Images/Group 220.png"
import flower from "./Images/Group 195.png"
import deco from "./Images/Group 228.png"
import leaf from "./Images/Group 114.png"
import box1 from "./Images/Group 207.png"
import box2 from "./Images/Group 205.png"
import green from "./Images/Group 39.png"
import eco from "./Images/Group 55.png"
import greenary from "./Images/Group 64.png"
import coma from "./Images/Group 86.png"
import foot from "./Images/Group 229.png"
import organiclogo from "./Images/Group 225.png"
import fb from "./Images/Group 99.png"
import linked from "./Images/Group 100.png"
import insta from "./Images/Group 105.png"
import oil from "./Images/oil.png"
import container from "./Images/container.png"
import potted from "./Images/potted.png"

function App() {

 
  return (
    <div className="App">
      <header className="header">
         <img className="logo"src={organic} alt="preview"></img>
         <h1 className="logo-text">Organic</h1>
      <ul className="headers">
        <li className="header-list">Home</li>
        <li className="header-list">Products</li>
        <li className="header-list">Blog</li>
        <li className="header-list">About us</li>
      </ul>
      <li className="header-button">Contact</li>
      </header>

      <div className="center">
        <div className="center-text">
          <h1>Healthy life with</h1>
          <h1>Nature Organic</h1>
          <p>Vegetables are edible parts of plants</p>
          <p>that is used in cokking or can be eaten now.</p>
          <button className="center-button">Explore now</button>
        </div>
        
         <div className="center-flower">
         < img classname="center-flower"src={flower} alt=""></img>
        </div>
        <div className="center-deco">
          <img src={deco} alt=""></img>
        </div>
      
          
          
        
      </div>
      <div className="welcome">
         <img src={leaf} alt=""></img>
         <h1>Welcome to Content</h1>
         <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web brows</p>
         
       </div>
       <div className="images">
         <img src={box1} alt=""></img>
         <img src={box2} alt=""></img>
         <img src={box1} alt=""></img>
         <img src={box1} alt=""></img>

       </div>
       <div className="produly">
         <h1>Proudly Presented By</h1>
         <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web brows</p>
         
       </div>
          <div className="images">
            <img src={green} alt=""></img>
         <img src={eco} alt=""></img>
         <img src={greenary} alt=""></img>
         <img src={eco} alt=""></img>
         <img src={green} alt=""></img>
          </div>
          <div className="dot">
           <FiberManualRecordIcon/>
           <FiberManualRecordIcon />
           <FiberManualRecordIcon/>
           <FiberManualRecordIcon/>
          </div>
          <div className="coma">
            
           
            <div className="comas">
              <img src={coma} alt=""></img>
              <div className="woman">
                <img src={woman} alt=""></img>
              </div>
              
              <h3>Jane Doe</h3>
              <StarBorderIcon/>
              <StarBorderIcon/>
              <StarBorderIcon/>
              <StarBorderIcon/>
              <StarBorderIcon/>
              <p>Thank you for all the amazing produce and products you deliver each week...</p>
              <p>you make my life so easy and bring goodness into our family eating</p>
              <p>i have been roasting a lot of brussle sproutes and</p>
              <FiberManualRecordOutlinedIcon/>
              <FiberManualRecordOutlinedIcon/>
              <FiberManualRecordOutlinedIcon/>
              <FiberManualRecordOutlinedIcon/>
            </div>
          </div>
          <div className="subscribe">
            <h1>Subscribe to our Newsletter</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
            <p>Lorem Ipsum has been the industry's standard </p>
            <div className="subscribe-text">
               <input className="subscribe-input" type="text" placeholder="Enter your email address"></input>
            <button className="subscribe-button">Subscribe</button>
            </div>
            <div className="blog">
            <img src={leaf} alt=""></img>
            <h1>Read Our Blog</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
          </div>
           
          </div>
          <div className="cards">
            <div className="card1">
              <div className="container">
                <img src={oil} alt=""></img>
              </div>
              <div className="details">
              <h2>Blog Post One</h2>
                <p>Lorem ipsum dolor sit amet consecuter adipising elit praesentium dignissimos minus</p>
                <p>Read more</p>
              </div>
              </div>
              <div className="card2">
                <div className="container">
                <img src={potted} alt=""></img>
              </div>
              <div className="details">
              <h2>Blog Post One</h2>
                <p>Lorem ipsum dolor sit amet consecuter adipising elit praesentium dignissimos minus</p>
                <p>Read more</p>
              </div>
              </div>
              <div className="card3">
                <div className="container">
                <img src={container} alt=""></img>
              </div>
              <div className="details">
                <h2>Blog Post One</h2>
                <p>Lorem ipsum dolor sit amet consecuter adipising elit praesentium dignissimos minus</p>
                <p>Read more</p>
              </div>
              </div>
              
            
          </div>
          
          
          <div className="foot">
            <img src={foot} alt=""></img>
            <div className="foot-left">
              <img src={organiclogo} alt=""></img>
              <p className="under">Lorem Ipsum is simply dummy text of the printing  </p>
              <h2>@copyright 2020 Nature</h2>
            </div>
            <div className="foot-center">
              <h1 className="under">Information</h1>
              <p>About us</p>
              <p>Product</p>
              <p>Contact us</p>
              <p>Term of Services</p>

            </div>
            <div className="foot-right">
              <h1 className="under">Follow us</h1>
              <img src={fb} alt=""></img>
              <img src={linked} alt=""></img>
              <img src={insta} alt=""></img>
              
            </div>
          </div>
          

    </div>
    
  );
}

export default App;
