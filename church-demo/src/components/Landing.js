import React from "react";
// import { Link } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  return (
      <>
        <div className="landing-container">
        <h1 className="title">St.Luke</h1>
        <p className="bannerCaption">
            logo? <span id="myElement"></span>
          </p>
      {/* <Link to="/ministries">Ministries</Link>
      <Link to="/contact">Contact</Link> */}
      </div>
        <div className="aboutContainer">
        <h1>Why We Exist</h1>
        <p>We exist to call men and women to celebrate and be changed by the life, death and resurrection of Jesus and His Lordship over all of life – for the good of our city and the world.

In scripture we meet a God who has acted decisively in the life, death and resurrection of Jesus to redeem and restore all people to Himself. Jesus lives the life we could not live, dies the death that we deserve to die, and is raised from the dead and revealed to be the King over all creation. This was no arbitrary event in history; it is the decisive moment.

St. Luke’s mission is to inspire hearts through presenting the Good News of Jesus Christ truthfully and relevantly, to lead people in becoming disciples of Jesus, and to empower followers of Jesus to impact Columbus, the Chattahoochee Valley, and the World with the transforming message of the Gospel.</p>
    </div>
    <div className="locationContainer">
        <h1>where we are, with a map that shows where and 
            <br />
            contact phone number and email link            
        </h1>
    </div>
    </>
  );
};

export default Landing;