import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
	     <div className="bg-light py-5">
        <Jumbotron />
		    <button className="btn btn-primary btn-lg ms-4" type="button">Call to action</button>
		   </div> 
        <div className="row mt-4">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
		      <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


