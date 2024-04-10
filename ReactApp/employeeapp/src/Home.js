import React, { Component } from "react";
import office from "./PngItem_1918871.png";
import "./MyStyles.css";


export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home1" >
         <h1> This is Home page.</h1>
          <h3>Here we can add Company details, Attendance,
          important Notices, Dashboard,etc.....</h3>
        </div>
        <div className="mt-3 justify-content-center">
          <img className="Office align-items-center" src={office} alt="logo1" />
        </div>
      </div>
    );
  }
}
