import React from "react";
import {Component} from "react";
import Info from "./Components/Info";
import Job from "./Components/Job";
import Education from "./Components/Education"
import  "./styles/mainPage.css";

class App extends Component
{
  constructor(){
    super();
  }
  render(){
  return(
  <div class = "whole">
  <div class = "main">
    
    <div class = "head">
    <section class = "title">
      Create your own CV APP
    </section>
    </div>
    <div class = "body">
    <div class= "Info">
      <Info/>
    </div>  
    <div class = "education">
        <Education/>
    </div>
    <div class = "job">
      <Job/>
    </div>
    </div>
    </div>
    </div>
    
  );
 }
}
export default App;