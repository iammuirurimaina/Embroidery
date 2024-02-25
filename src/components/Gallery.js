import React from 'react';
import "../Gallery.scss";
import bellpepper from "../images/stichfriendly.jpg";
import fruits from "../images/students.jpg";
import peppers from "../images/projects.jpg";
import potato from "../images/students.jpg";
import tomato from "../images/schoollogos.jpg";

function Gallery() {
  return (
    <div className="container1">
      <div className="card">
        <img src={tomato} alt="..." />
        <div className="card__head bg-blue-400">School Logo Designs</div>
      </div>
      <div className="card">
        <img src={bellpepper} alt="..." />
        <div className="card__head bg-blue-400">Stitching-Friendly Formats</div>
      </div>
      {/* <div className="card">
        <img src={potato} alt="..." />
        <div className="card__head bg-lime-400">Convenient Access</div>
      </div> */}
      <div className="card">
        <img src={peppers} alt="..." />
        <div className="card__head bg-blue-400">Perfect Designs for Projects</div>
      </div>
      <div className="card">
        <img src={fruits} alt="..." />
        <div className="card__head bg-blue-400">Showcase School Pride</div>
      </div>
    </div>
  );
}

export default Gallery;
